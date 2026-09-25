import type { Dashboard } from '../../config/types';
import { useT } from '../../hooks/useHa';
import Icon from '../base/icon/Icon';
import { SIDEBAR_PARTS, sameView, type EditorView } from '../../lib/editorNav';
import { StyledNav } from './editor.styled';

interface EditorNavProps {
  dashboards: { id: string; name: string }[];
  draft: Dashboard;
  view: EditorView;
  /** Branches unfolded, by key: 'sidebar', 'pages', 'page-0', 'buttons'. */
  expanded: Set<string>;
  open: boolean;
  onToggle: (key: string) => void;
  onOpen: (view: EditorView, expand?: string) => void;
  onSwitch: (dashboardId: string) => void;
  onNewDashboard: () => void;
}

/**
 * The menu: every dashboard, the one being edited unfolded into its parts,
 * and the users. Grouped the way the tablet is built -- general settings,
 * the sidebar block by block, the pages and their sections, the buttons --
 * so a setting is found where it is seen.
 */
const EditorNav: React.FC<EditorNavProps> = ({ dashboards, draft, view, expanded, open, onToggle, onOpen, onSwitch, onNewDashboard }) => {
  const t = useT();

  const item = (target: EditorView, label: string, icon: string) => (
    <li key={JSON.stringify(target)}>
      <button type='button' aria-current={sameView(view, target) ? 'page' : undefined} onClick={() => onOpen(target)}>
        <Icon className='icon' icon={icon} />
        <span className='grow'>{label}</span>
      </button>
    </li>
  );

  /** An entry with entries below it: its label opens it, its chevron only folds. */
  const branch = (key: string, target: EditorView, label: string, icon: string, children: React.ReactNode) => {
    const isOpen = expanded.has(key);
    return (
      <li key={key}>
        <button
          type='button'
          aria-expanded={isOpen}
          aria-current={sameView(view, target) ? 'page' : undefined}
          onClick={() => onOpen(target, key)}
        >
          <Icon className='icon' icon={icon} />
          <span className='grow'>{label}</span>
          <span
            className='twist'
            data-open={isOpen}
            role='button'
            aria-label={label}
            onClick={event => {
              event.stopPropagation();
              onToggle(key);
            }}
          >
            <Icon icon='mdi:chevron-right' />
          </span>
        </button>
        {isOpen && <ul className='sub'>{children}</ul>}
      </li>
    );
  };

  const current = (
    <>
      {item({ kind: 'general' }, t('tab_general'), 'mdi:cog-outline')}
      {branch(
        'sidebar',
        { kind: 'sidebar', part: SIDEBAR_PARTS[0].part },
        t('tab_sidebar'),
        'mdi:dock-left',
        SIDEBAR_PARTS.map(part => item({ kind: 'sidebar', part: part.part }, t(part.label), part.icon))
      )}
      {branch(
        'pages',
        { kind: 'pages' },
        t('tab_pages'),
        'mdi:book-open-page-variant-outline',
        draft.pages.map((page, pageIndex) =>
          page.sections.length
            ? branch(
                `page-${pageIndex}`,
                { kind: 'page', page: pageIndex },
                t('page_n', { n: pageIndex + 1 }),
                'mdi:file-outline',
                page.sections.map((section, index) =>
                  item(
                    { kind: 'section', page: pageIndex, section: index },
                    section.name || t('section_n', { n: index + 1 }),
                    section.icon || 'mdi:view-grid-outline'
                  )
                )
              )
            : item({ kind: 'page', page: pageIndex }, t('page_n', { n: pageIndex + 1 }), 'mdi:file-outline')
        )
      )}
      {branch(
        'buttons',
        { kind: 'buttons' },
        t('tab_buttons'),
        'mdi:gesture-tap-button',
        draft.buttons.map((button, index) =>
          item({ kind: 'button', button: index }, button.name || t('button_n', { n: index + 1 }), button.icon || 'mdi:gesture-tap')
        )
      )}
    </>
  );

  return (
    <StyledNav $open={open} as='nav' aria-label={t('editor_title')}>
      <div className='heading'>{t('nav_dashboards')}</div>
      <ul>
        {dashboards.map(dashboard =>
          dashboard.id === draft.id ? (
            <li key={dashboard.id}>
              <button type='button' aria-expanded onClick={() => onOpen({ kind: 'general' })}>
                <Icon className='icon' icon='mdi:tablet-dashboard' />
                <span className='grow'>
                  <strong>{draft.name}</strong>
                </span>
              </button>
              <ul className='sub'>{current}</ul>
            </li>
          ) : (
            <li key={dashboard.id}>
              <button type='button' onClick={() => onSwitch(dashboard.id)}>
                <Icon className='icon' icon='mdi:tablet-dashboard' />
                <span className='grow'>{dashboard.name}</span>
              </button>
            </li>
          )
        )}
        <li className='add'>
          <button type='button' onClick={onNewDashboard}>
            <Icon className='icon' icon='mdi:plus' />
            <span className='grow'>{t('new_dashboard')}</span>
          </button>
        </li>
      </ul>
      <div className='heading'>{t('nav_house')}</div>
      <ul>{item({ kind: 'users' }, t('tab_users'), 'mdi:account-multiple-outline')}</ul>
    </StyledNav>
  );
};

export default EditorNav;
