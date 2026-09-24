import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import type { Dashboard, DashboardDocument } from '../../config/types';
import { useConnection, useT } from '../../hooks/useHa';
import { useDashboardContext } from '../../config/DashboardProvider';
import Popup from '../base/popup/Popup';
import Icon from '../base/icon/Icon';
import SidebarForm from './SidebarForm';
import PagesForm from './PagesForm';
import ButtonsForm from './ButtonsForm';
import UsersForm from './UsersForm';
import { EntityCatalog, RangeField, TextField } from './fields';
import { StyledField, StyledGroup, StyledRow, StyledSmallButton } from './fields.styled';
import { newId } from '../../lib/editing';

const TABS = ['general', 'sidebar', 'pages', 'buttons', 'users', 'json'] as const;
type Tab = (typeof TABS)[number];

const StyledTabs = styled.div`
  display: flex;
  gap: ${u(0.3)};
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: ${u(0.2)} 0 ${u(0.6)};
  background: ${({ theme }) => theme.popup.background};

  button {
    padding: ${u(0.45)} ${u(0.9)};
    border-radius: ${u(1)};
    font-size: ${u(0.9)};
    color: ${({ theme }) => theme.text.secondary};
  }

  button[aria-selected='true'] {
    background: ${({ theme }) => theme.bubble.header};
    color: ${({ theme }) => theme.text.primary};
  }
`;

const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: ${u(0.5)};
  margin-right: ${u(0.5)};

  select {
    padding: ${u(0.4)} ${u(0.6)};
    border-radius: ${u(0.6)};
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: inherit;
  }

  .status {
    font-size: ${u(0.8)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
  }
`;

const StyledJson = styled.textarea`
  min-height: 50dvh;
  font-family: ui-monospace, 'JetBrains Mono', monospace;
  font-size: ${u(0.8)};
`;

const copyOf = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

/**
 * Where an admin builds the dashboards, from their desk.
 *
 * Edits a draft of one dashboard and saves it whole. The saved document is
 * what the integration stores in Home Assistant; every tablet showing that
 * dashboard redraws the moment the save lands.
 */
const DashboardEditor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const t = useT();
  const connection = useConnection();
  const { view } = useDashboardContext();
  const [document, setDocument] = useState<DashboardDocument | null>(null);
  const [selected, setSelected] = useState<string>(view?.dashboard.id ?? 'default');
  const [draft, setDraft] = useState<Dashboard | null>(null);
  const [dirty, setDirty] = useState(false);
  const [tab, setTab] = useState<Tab>('general');
  const [status, setStatus] = useState<string>('');
  const [jsonText, setJsonText] = useState('');

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
        open(result, selected);
      })
      .catch(error => setStatus(String(error?.message ?? error)));
    // Loaded once per editor; `selected` is only where it starts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, open]);

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

  const close = () => {
    if (confirmDiscard()) onClose();
  };

  const create = (from?: Dashboard) => {
    if (!confirmDiscard()) return;
    const base = from ? copyOf(from) : copyOf(document!.dashboards.default);
    const created: Dashboard = { ...base, id: newId(), name: from ? `${from.name} (2)` : t('new_dashboard') };
    setDraft(created);
    setSelected(created.id);
    setDirty(true);
    showTab('general');
  };

  const remove = async () => {
    if (!connection || !draft || draft.id === 'default') return;
    if (!window.confirm(t('confirm_delete', { name: draft.name }))) return;
    await connection.sendMessagePromise({ type: 'better_wall_dashboard/delete_dashboard', dashboard_id: draft.id });
    setDocument(current => {
      if (!current) return current;
      const dashboards = { ...current.dashboards };
      delete dashboards[draft.id];
      return { ...current, dashboards };
    });
    if (document) open(document, 'default');
  };

  const dashboards = useMemo(() => {
    const list = Object.values(document?.dashboards ?? {}).map(item => ({ id: item.id, name: item.name }));
    if (draft && !list.some(item => item.id === draft.id)) list.push({ id: draft.id, name: draft.name });
    return list;
  }, [document, draft]);

  const actions = (
    <StyledToolbar>
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
      <StyledSmallButton type='button' onClick={() => create()} title={t('new_dashboard')}>
        <Icon icon='mdi:plus' />
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
    </StyledToolbar>
  );

  return (
    <Popup open onClose={close} title={t('editor_title')} icon='mdi:pencil' full idleMs={0} actions={actions}>
      <EntityCatalog>
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
      </EntityCatalog>
    </Popup>
  );
};

export default DashboardEditor;
