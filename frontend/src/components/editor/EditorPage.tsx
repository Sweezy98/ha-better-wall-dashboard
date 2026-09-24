import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Dashboard, DashboardDocument } from '../../config/types';
import { useConnection, useT } from '../../hooks/useHa';
import type { TranslationKey } from '../../lib/i18n';
import { useModeState } from '../../panel/mode';
import { openHomeAssistantSidebar } from '../../panel/kiosk';
import Icon from '../base/icon/Icon';
import HaButton from './ha/HaButton';
import EditorNav from './EditorNav';
import EditorPreview from './EditorPreview';
import UsersForm from './UsersForm';
import AboutDialog from './AboutDialog';
import { useConfirm } from './useConfirm';
import GeneralScreen from './screens/GeneralScreen';
import SidebarScreen from './screens/SidebarScreen';
import JsonScreen from './screens/JsonScreen';
import { PageScreen, PagesScreen, SectionScreen } from './screens/PagesScreens';
import { ButtonScreen, ButtonsScreen } from './screens/ButtonsScreens';
import { DEVICES } from '../../lib/devices';
import { EntityCatalog, SelectField } from './fields';
import { copyOf, newId } from '../../lib/editing';
import { branchesOf, clampView, crumbsOf, type EditorView } from '../../lib/editorNav';
import {
  StyledBody,
  StyledEditor,
  StyledHeader,
  StyledHeaderButton,
  StyledOverflow,
  StyledPreviewCard,
  StyledScreen,
  StyledScrim,
} from './editor.styled';
import type { ScreenProps } from './screens/common';

/** The screen for where the editor is. */
const Screen: React.FC<ScreenProps & { view: EditorView; dashboards: { id: string; name: string }[] }> = ({
  view,
  dashboards,
  ...props
}) => {
  switch (view.kind) {
    case 'general':
      return <GeneralScreen {...props} />;
    case 'sidebar':
      return <SidebarScreen {...props} part={view.part} />;
    case 'pages':
      return <PagesScreen {...props} />;
    case 'page':
      return <PageScreen {...props} page={view.page} />;
    case 'section':
      return <SectionScreen {...props} page={view.page} section={view.section} />;
    case 'buttons':
      return <ButtonsScreen {...props} />;
    case 'button':
      return <ButtonScreen {...props} button={view.button} />;
    case 'users':
      return <UsersForm dashboards={dashboards} />;
    case 'json':
      // Keyed by the dashboard, so switching to another starts from its text.
      return <JsonScreen key={props.draft.id} {...props} />;
  }
};

/**
 * Where an admin builds the dashboards: its own panel in Home Assistant's
 * sidebar, admin-only, and never on the wall tablet -- laid out as Home
 * Assistant lays out its own settings: its toolbar, a menu of what there is
 * to set up, one screen at a time, and here the tablet itself beside it.
 *
 * Edits a draft of one dashboard, shown live as the chosen tablet would draw
 * it, and saves it whole. Every tablet showing that dashboard redraws the
 * moment the save lands.
 */
const EditorPage: React.FC = () => {
  const t = useT();
  const connection = useConnection();
  const { narrow } = useModeState();
  const [document, setDocument] = useState<DashboardDocument | null>(null);
  const [draft, setDraft] = useState<Dashboard | null>(null);
  const [dirty, setDirty] = useState(false);
  const [status, setStatus] = useState('');
  const [view, setView] = useState<EditorView>({ kind: 'general' });
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState(false);
  const [about, setAbout] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [deviceId, setDeviceId] = useState<string>(DEVICES[0].id);
  const [portrait, setPortrait] = useState(false);
  const device = DEVICES.find(item => item.id === deviceId) ?? DEVICES[0];

  /** Start editing one dashboard of `source`, dropping any unsaved draft. */
  const load = useCallback((source: DashboardDocument, id: string) => {
    setDraft(copyOf(source.dashboards[id] ?? source.dashboards.default));
    setDirty(false);
  }, []);

  useEffect(() => {
    connection
      ?.sendMessagePromise<DashboardDocument>({ type: 'better_wall_dashboard/document' })
      .then(result => {
        setDocument(result);
        load(result, 'default');
      })
      .catch(error => setStatus(String(error?.message ?? error)));
  }, [connection, load]);

  // Leaving the page with unsaved changes asks first, like any editor.
  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const update = useCallback((next: Dashboard) => {
    setDraft(next);
    setDirty(true);
    setStatus('');
  }, []);

  /** Open a screen, unfold the menu on the way to it, and fold the drawer away. */
  const open = useCallback((next: EditorView, expand?: string) => {
    setView(next);
    setExpanded(current => new Set([...current, ...branchesOf(next), ...(expand ? [expand] : [])]));
    setDrawer(false);
    setMenu(false);
    setShowPreview(false);
  }, []);

  const toggle = useCallback((key: string) => {
    setExpanded(current => {
      const next = new Set(current);
      if (!next.delete(key)) next.add(key);
      return next;
    });
  }, []);

  const { confirm, dialog } = useConfirm();
  const confirmDiscard = async () =>
    !dirty || confirm({ title: t('discard_title'), text: t('discard_text'), confirm: t('discard'), danger: true });

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
      setDraft(copyOf(result.dashboard));
      setDirty(false);
      setStatus(t('saved'));
    } catch (error) {
      setStatus(String((error as { message?: string })?.message ?? error));
    }
  };

  const discard = async () => {
    if (!document || !draft || !(await confirmDiscard())) return;
    const stored = document.dashboards[draft.id];
    if (stored) load(document, draft.id);
    else load(document, 'default');
    setStatus('');
  };

  const switchTo = async (id: string) => {
    if (!document || !(await confirmDiscard())) return;
    load(document, id);
    open({ kind: 'general' });
  };

  const create = async (from?: Dashboard) => {
    setMenu(false);
    if (!document || !(await confirmDiscard())) return;
    const base = copyOf(from ?? document.dashboards.default);
    setDraft({ ...base, id: newId(), name: from ? `${from.name} (2)` : t('new_dashboard') });
    setDirty(true);
    open({ kind: 'general' });
  };

  const remove = async () => {
    setMenu(false);
    if (!connection || !draft || !document || draft.id === 'default') return;
    const ok = await confirm({
      title: t('delete_title', { name: draft.name }),
      text: t('confirm_delete', { name: draft.name }),
      confirm: t('delete'),
      danger: true,
    });
    if (!ok) return;
    if (document.dashboards[draft.id]) {
      await connection.sendMessagePromise({ type: 'better_wall_dashboard/delete_dashboard', dashboard_id: draft.id });
    }
    const dashboards = { ...document.dashboards };
    delete dashboards[draft.id];
    const next = { ...document, dashboards };
    setDocument(next);
    load(next, 'default');
    open({ kind: 'general' });
  };

  const dashboards = useMemo(() => {
    const list = Object.values(document?.dashboards ?? {}).map(item => ({ id: item.id, name: item.name }));
    if (draft && !list.some(item => item.id === draft.id)) list.push({ id: draft.id, name: draft.name });
    return list.map(item => (item.id === draft?.id ? { ...item, name: draft.name } : item));
  }, [document, draft]);

  if (!draft) {
    return (
      <StyledEditor>
        <StyledHeader data-narrow={narrow}>
          <span className='app-title'>{t('editor_title')}</span>
        </StyledHeader>
        <p style={{ padding: 24 }}>{status || t('loading')}</p>
      </StyledEditor>
    );
  }

  const current = clampView(view, draft);
  const crumbs = crumbsOf(current, {
    label: key => t(key as TranslationKey),
    page: index => t('page_n', { n: index + 1 }),
    section: (page, index) => draft.pages[page]?.sections[index]?.name || t('section_n', { n: index + 1 }),
    button: index => draft.buttons[index]?.name || t('button_n', { n: index + 1 }),
  });
  const previewPage = current.kind === 'page' || current.kind === 'section' ? current.page : undefined;
  const savesWithDashboard = current.kind !== 'users';

  return (
    <EntityCatalog>
      <StyledEditor>
        <StyledHeader data-narrow={narrow}>
          <StyledHeaderButton
            type='button'
            className='only-narrow'
            aria-label={t('menu')}
            onClick={event => openHomeAssistantSidebar(event.currentTarget)}
          >
            <Icon icon='mdi:menu' />
          </StyledHeaderButton>
          <StyledHeaderButton type='button' className='only-drawer' aria-label={t('editor_menu')} onClick={() => setDrawer(true)}>
            <Icon icon='mdi:format-list-bulleted' />
          </StyledHeaderButton>
          <div className='titles'>
            <span className='app-title'>{t('editor_title')}</span>
            <nav aria-label={t('editor_menu')}>
              <button type='button' onClick={() => open({ kind: 'general' })}>
                {draft.name}
              </button>
              {crumbs.map((crumb, index) => (
                <span key={index}>
                  {'› '}
                  {crumb.view ? (
                    <button type='button' onClick={() => open(crumb.view!)}>
                      {crumb.label}
                    </button>
                  ) : (
                    crumb.label
                  )}
                </span>
              ))}
            </nav>
          </div>
          <span className='spacer' />
          <StyledHeaderButton
            type='button'
            className='only-no-preview'
            aria-pressed={showPreview}
            aria-label={t('preview')}
            title={t('preview')}
            onClick={() => setShowPreview(value => !value)}
          >
            <Icon icon={showPreview ? 'mdi:form-select' : 'mdi:tablet-dashboard'} />
          </StyledHeaderButton>
          <StyledOverflow>
            <StyledHeaderButton type='button' aria-label={t('more')} aria-expanded={menu} onClick={() => setMenu(value => !value)}>
              <Icon icon='mdi:dots-vertical' />
            </StyledHeaderButton>
            {menu && (
              <div className='menu' role='menu'>
                <button type='button' role='menuitem' onClick={() => void create()}>
                  <Icon icon='mdi:plus' /> {t('new_dashboard')}
                </button>
                <button type='button' role='menuitem' onClick={() => void create(draft)}>
                  <Icon icon='mdi:content-copy' /> {t('duplicate')}
                </button>
                <button type='button' role='menuitem' onClick={() => open({ kind: 'json' })}>
                  <Icon icon='mdi:code-json' /> {t('edit_json')}
                </button>
                <button type='button' role='menuitem' className='danger' disabled={draft.id === 'default'} onClick={() => void remove()}>
                  <Icon icon='mdi:delete-outline' /> {t('delete_dashboard')}
                </button>
                <hr />
                <button
                  type='button'
                  role='menuitem'
                  onClick={() => {
                    setMenu(false);
                    setAbout(true);
                  }}
                >
                  <Icon icon='mdi:information-outline' /> {t('about')}
                </button>
              </div>
            )}
          </StyledOverflow>
        </StyledHeader>

        <StyledBody>
          <StyledScrim $open={drawer} onClick={() => setDrawer(false)} />
          <EditorNav
            dashboards={dashboards}
            draft={draft}
            view={current}
            expanded={expanded}
            open={drawer}
            onToggle={toggle}
            onOpen={open}
            onSwitch={id => void switchTo(id)}
            onNewDashboard={() => void create()}
          />

          <StyledScreen $hidden={showPreview}>
            <div className='screen-body'>
              <Screen view={current} dashboards={dashboards} draft={draft} update={update} open={open} />
            </div>
            {savesWithDashboard && (
              <div className='screen-foot'>
                <span className='status'>{dirty ? t('unsaved') : status}</span>
                <span className='end'>
                  <HaButton appearance='plain' disabled={!dirty} onClick={() => void discard()}>
                    {t('discard')}
                  </HaButton>
                  <HaButton appearance='accent' icon='mdi:content-save-outline' disabled={!dirty} onClick={save}>
                    {t('save')}
                  </HaButton>
                </span>
              </div>
            )}
          </StyledScreen>

          <StyledPreviewCard $shown={showPreview}>
            <div className='preview-bar'>
              <h2>{t('preview')}</h2>
              <SelectField
                label={t('device')}
                value={deviceId}
                options={DEVICES.map(item => ({ value: item.id, label: item.label }))}
                onChange={setDeviceId}
              />
              <StyledHeaderButton
                type='button'
                style={{ color: 'var(--secondary-text-color)' }}
                aria-label={portrait ? t('landscape') : t('portrait')}
                title={portrait ? t('landscape') : t('portrait')}
                onClick={() => setPortrait(value => !value)}
              >
                <Icon icon={portrait ? 'mdi:phone-rotate-landscape' : 'mdi:phone-rotate-portrait'} />
              </StyledHeaderButton>
            </div>
            <div className='stage'>
              <EditorPreview dashboard={draft} device={device} portrait={portrait} page={previewPage} />
            </div>
          </StyledPreviewCard>
        </StyledBody>
        <AboutDialog open={about} onClose={() => setAbout(false)} />
        {dialog}
      </StyledEditor>
    </EntityCatalog>
  );
};

export default EditorPage;
