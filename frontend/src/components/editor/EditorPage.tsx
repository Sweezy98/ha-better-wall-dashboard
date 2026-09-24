import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import type { Dashboard, DashboardDocument } from '../../config/types';
import { useConnection, useT } from '../../hooks/useHa';
import { useModeState } from '../../panel/mode';
import { openHomeAssistantSidebar } from '../../panel/kiosk';
import Icon from '../base/icon/Icon';
import SidebarForm from './SidebarForm';
import PagesForm from './PagesForm';
import ButtonsForm from './ButtonsForm';
import UsersForm from './UsersForm';
import EditorPreview from './EditorPreview';
import { DEVICES } from '../../lib/devices';
import { EntityCatalog, RangeField, TextField } from './fields';
import { StyledField, StyledGroup, StyledRow, StyledSmallButton } from './fields.styled';
import { newId } from '../../lib/editing';

const TABS = ['general', 'sidebar', 'pages', 'buttons', 'users', 'json'] as const;
type Tab = (typeof TABS)[number];

/**
 * The editor runs on a desk, not on the wall: a fixed unit rather than one
 * scaled to the screen, so forms are the same size in any window.
 */
const StyledPage = styled.div`
  --u: 14px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  background: #101316;
  color: ${({ theme }) => theme.text.primary};
`;

const StyledTopBar = styled.header`
  display: flex;
  align-items: center;
  gap: ${u(0.7)};
  padding: ${u(0.7)} ${u(1.2)};
  border-bottom: ${({ theme }) => theme.card.border};
  background: #14191e;
  flex-wrap: wrap;

  h1 {
    margin: 0 auto 0 0;
    font-size: ${u(1.3)};
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: ${u(0.6)};
    white-space: nowrap;
  }

  select {
    padding: ${u(0.45)} ${u(0.7)};
    border-radius: ${u(0.6)};
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: inherit;
    font-size: ${u(0.9)};
  }

  .status {
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
  }
`;

const StyledBody = styled.div`
  display: grid;
  grid-template-columns: minmax(${u(30)}, 42%) minmax(0, 1fr);
  min-height: 0;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) ${u(24)};
  }
`;

const StyledForms = styled.div`
  overflow-y: auto;
  padding: ${u(0.4)} ${u(1.2)} ${u(2)};
  display: flex;
  flex-direction: column;
  gap: ${u(0.8)};
  border-right: ${({ theme }) => theme.card.border};
`;

const StyledTabs = styled.div`
  display: flex;
  gap: ${u(0.3)};
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: ${u(0.6)} 0;
  background: #101316;

  button {
    padding: ${u(0.45)} ${u(0.9)};
    border-radius: ${u(1)};
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.secondary};
  }

  button[aria-selected='true'] {
    background: ${({ theme }) => theme.bubble.header};
    color: ${({ theme }) => theme.text.primary};
  }
`;

const StyledPreviewPane = styled.section`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  min-height: 0;
  min-width: 0;
  background: radial-gradient(80% 80% at 50% 40%, #1a2129, #0c0f12);

  .toolbar {
    display: flex;
    gap: ${u(0.6)};
    align-items: center;
    padding: ${u(0.6)} ${u(1)};
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .toolbar select {
    padding: ${u(0.35)} ${u(0.6)};
    border-radius: ${u(0.6)};
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: inherit;
  }
`;

const StyledJson = styled.textarea`
  min-height: 60dvh;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: ${u(0.8)};
`;

const copyOf = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

/**
 * Where an admin builds the dashboards: its own panel in Home Assistant's
 * sidebar, admin-only, and never on the wall tablet.
 *
 * Edits a draft of one dashboard, shown live beside the forms as the chosen
 * tablet would draw it, and saves it whole. Every tablet showing that
 * dashboard redraws the moment the save lands.
 */
const EditorPage: React.FC = () => {
  const t = useT();
  const connection = useConnection();
  const { narrow } = useModeState();
  const [document, setDocument] = useState<DashboardDocument | null>(null);
  const [selected, setSelected] = useState('default');
  const [draft, setDraft] = useState<Dashboard | null>(null);
  const [dirty, setDirty] = useState(false);
  const [tab, setTab] = useState<Tab>('general');
  const [status, setStatus] = useState('');
  const [jsonText, setJsonText] = useState('');
  const [deviceId, setDeviceId] = useState<string>(DEVICES[0].id);
  const [portrait, setPortrait] = useState(false);
  const device = DEVICES.find(item => item.id === deviceId) ?? DEVICES[0];

  /** Start editing one dashboard of `source`, dropping any unsaved draft. */
  const open = useCallback((source: DashboardDocument, id: string) => {
    const dashboard = source.dashboards[id] ?? source.dashboards.default;
    setSelected(dashboard.id);
    setDraft(copyOf(dashboard));
    setDirty(false);
  }, []);

  useEffect(() => {
    connection
      ?.sendMessagePromise<DashboardDocument>({ type: 'better_wall_dashboard/document' })
      .then(result => {
        setDocument(result);
        open(result, 'default');
      })
      .catch(error => setStatus(String(error?.message ?? error)));
  }, [connection, open]);

  // Leaving the page with unsaved changes asks first, like any editor.
  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const showTab = (name: Tab) => {
    // The JSON view is a snapshot taken when it is opened, so typing into it
    // is not overwritten by the draft it is about to replace.
    if (name === 'json' && draft) setJsonText(JSON.stringify(draft, null, 2));
    setTab(name);
  };

  const update = useCallback((next: Dashboard) => {
    setDraft(next);
    setDirty(true);
    setStatus('');
  }, []);

  const save = async () => {
    if (!connection || !draft) return;
    setStatus(t('saving'));
    try {
      const result = await connection.sendMessagePromise<{ dashboard: Dashboard }>({
        type: 'better_wall_dashboard/save_dashboard',
        dashboard: draft,
      });
      setDocument(current =>
        current ? { ...current, dashboards: { ...current.dashboards, [result.dashboard.id]: result.dashboard } } : current
      );
      setSelected(result.dashboard.id);
      setDraft(copyOf(result.dashboard));
      setDirty(false);
      setStatus(t('saved'));
    } catch (error) {
      setStatus(String((error as { message?: string })?.message ?? error));
    }
  };

  const confirmDiscard = () => !dirty || window.confirm(t('discard') + '?');

  const create = (from?: Dashboard) => {
    if (!document || !confirmDiscard()) return;
    const base = copyOf(from ?? document.dashboards.default);
    const created: Dashboard = { ...base, id: newId(), name: from ? `${from.name} (2)` : t('new_dashboard') };
    setDraft(created);
    setSelected(created.id);
    setDirty(true);
    showTab('general');
  };

  const remove = async () => {
    if (!connection || !draft || !document || draft.id === 'default') return;
    if (!window.confirm(t('confirm_delete', { name: draft.name }))) return;
    await connection.sendMessagePromise({ type: 'better_wall_dashboard/delete_dashboard', dashboard_id: draft.id });
    const dashboards = { ...document.dashboards };
    delete dashboards[draft.id];
    const next = { ...document, dashboards };
    setDocument(next);
    open(next, 'default');
  };

  const dashboards = useMemo(() => {
    const list = Object.values(document?.dashboards ?? {}).map(item => ({ id: item.id, name: item.name }));
    if (draft && !list.some(item => item.id === draft.id)) list.push({ id: draft.id, name: draft.name });
    return list;
  }, [document, draft]);

  return (
    <StyledPage>
      <StyledTopBar>
        {narrow && (
          <StyledSmallButton type='button' aria-label='Menu' onClick={event => openHomeAssistantSidebar(event.currentTarget)}>
            <Icon icon='mdi:menu' />
          </StyledSmallButton>
        )}
        <h1>
          <Icon icon='mdi:view-dashboard-edit' /> {t('editor_title')}
        </h1>
        <span className='status'>{dirty ? t('unsaved') : status}</span>
        <select
          value={selected}
          aria-label={t('dashboard')}
          onChange={event => {
            if (!confirmDiscard() || !document) return;
            open(document, event.target.value);
          }}
        >
          {dashboards.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <StyledSmallButton type='button' disabled={!document} onClick={() => create()} title={t('new_dashboard')}>
          <Icon icon='mdi:plus' /> {t('new_dashboard')}
        </StyledSmallButton>
        <StyledSmallButton type='button' disabled={!draft} onClick={() => draft && create(draft)} title={t('duplicate')}>
          <Icon icon='mdi:content-copy' />
        </StyledSmallButton>
        <StyledSmallButton type='button' $danger disabled={!draft || draft.id === 'default'} onClick={remove} title={t('delete_dashboard')}>
          <Icon icon='mdi:delete-outline' />
        </StyledSmallButton>
        <StyledSmallButton type='button' $primary disabled={!dirty} onClick={save}>
          <Icon icon='mdi:content-save' /> {t('save')}
        </StyledSmallButton>
      </StyledTopBar>

      <EntityCatalog>
        <StyledBody>
          <StyledForms>
            <StyledTabs role='tablist'>
              {TABS.map(name => (
                <button key={name} type='button' role='tab' aria-selected={tab === name} onClick={() => showTab(name)}>
                  {t(`tab_${name}`)}
                </button>
              ))}
            </StyledTabs>
            {!draft && <p>{status || t('loading')}</p>}
            {draft && tab === 'general' && (
              <StyledGroup>
                <legend>{t('tab_general')}</legend>
                <TextField label={t('name')} value={draft.name} onChange={name => update({ ...draft, name })} />
                <TextField
                  label={t('pin')}
                  hint={t('pin_hint')}
                  type='password'
                  value={draft.pin ?? ''}
                  onChange={pin => update({ ...draft, pin: pin.replace(/\D/g, '').slice(0, 8) })}
                />
                <TextField
                  label={t('background_image')}
                  hint={t('background_image_hint')}
                  value={draft.background.image}
                  onChange={image => update({ ...draft, background: { ...draft.background, image } })}
                />
                <StyledRow>
                  <RangeField
                    label={t('background_dim')}
                    value={draft.background.dim}
                    min={0}
                    max={0.95}
                    step={0.05}
                    format={value => `${Math.round(value * 100)} %`}
                    onChange={dim => update({ ...draft, background: { ...draft.background, dim } })}
                  />
                  <RangeField
                    label={t('background_blur')}
                    value={draft.background.blur}
                    min={0}
                    max={40}
                    step={1}
                    format={value => `${value} px`}
                    onChange={blur => update({ ...draft, background: { ...draft.background, blur } })}
                  />
                </StyledRow>
              </StyledGroup>
            )}
            {draft && tab === 'sidebar' && <SidebarForm value={draft.sidebar} onChange={sidebar => update({ ...draft, sidebar })} />}
            {draft && tab === 'pages' && <PagesForm pages={draft.pages} onChange={pages => update({ ...draft, pages })} />}
            {draft && tab === 'buttons' && <ButtonsForm buttons={draft.buttons} onChange={buttons => update({ ...draft, buttons })} />}
            {tab === 'users' && <UsersForm dashboards={dashboards} />}
            {draft && tab === 'json' && (
              <StyledField>
                <span className='label'>{t('json_hint')}</span>
                <StyledJson value={jsonText} spellCheck={false} onChange={event => setJsonText(event.target.value)} />
                <div>
                  <StyledSmallButton
                    type='button'
                    onClick={() => {
                      try {
                        const parsed = JSON.parse(jsonText) as Dashboard;
                        update({ ...parsed, id: draft.id });
                      } catch {
                        setStatus(t('json_invalid'));
                      }
                    }}
                  >
                    {t('apply')}
                  </StyledSmallButton>
                </div>
              </StyledField>
            )}
          </StyledForms>

          <StyledPreviewPane>
            <div className='toolbar'>
              <span>{t('preview')}</span>
              <select value={deviceId} onChange={event => setDeviceId(event.target.value)} aria-label={t('preview')}>
                {DEVICES.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
              <StyledSmallButton type='button' onClick={() => setPortrait(value => !value)} aria-pressed={portrait}>
                <Icon icon={portrait ? 'mdi:phone-rotate-landscape' : 'mdi:phone-rotate-portrait'} />
                {portrait ? t('landscape') : t('portrait')}
              </StyledSmallButton>
            </div>
            {draft && <EditorPreview dashboard={draft} device={device} portrait={portrait} />}
          </StyledPreviewPane>
        </StyledBody>
      </EntityCatalog>
    </StyledPage>
  );
};

export default EditorPage;
