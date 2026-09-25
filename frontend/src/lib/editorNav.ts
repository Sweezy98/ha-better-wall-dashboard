/**
 * Where the editor is: which screen of which part of a dashboard is open.
 *
 * Pure, so the menu, the breadcrumbs and the screens agree on one model and
 * it tests without a browser. Indexes point into the draft being edited; a
 * page or section removed from under them is caught by `clampView`.
 */

export const SIDEBAR_PARTS = [
  { part: 'clock', icon: 'mdi:clock-outline', label: 'clock' },
  { part: 'status', icon: 'mdi:wifi-star', label: 'nav_status' },
  { part: 'climate', icon: 'mdi:home-thermometer-outline', label: 'room_climate' },
  { part: 'persons', icon: 'mdi:account-multiple-outline', label: 'persons' },
  { part: 'openings', icon: 'mdi:window-open-variant', label: 'openings' },
  { part: 'travel', icon: 'mdi:car-clock', label: 'travel_time' },
  { part: 'quick', icon: 'mdi:gesture-tap-button', label: 'quick_actions' },
  { part: 'calendar', icon: 'mdi:calendar-month-outline', label: 'calendar' },
  { part: 'weather', icon: 'mdi:weather-partly-cloudy', label: 'weather' },
  { part: 'notifications', icon: 'mdi:bell-outline', label: 'notifications' },
  { part: 'system', icon: 'mdi:chart-box-outline', label: 'system_stats' },
] as const;

export type SidebarPart = (typeof SIDEBAR_PARTS)[number]['part'];

export type EditorView =
  | { kind: 'general' }
  | { kind: 'sidebar'; part: SidebarPart }
  | { kind: 'pages' }
  | { kind: 'page'; page: number }
  | { kind: 'section'; page: number; section: number }
  | { kind: 'buttons' }
  | { kind: 'button'; button: number }
  | { kind: 'users' }
  | { kind: 'json' };

/** What the model needs to know of a dashboard: how many of each thing it has. */
export interface DashboardShape {
  pages: { sections: unknown[] }[];
  buttons: unknown[];
}

/** The same screen if it still exists, else the nearest one above it that does. */
export function clampView(view: EditorView, dashboard: DashboardShape): EditorView {
  switch (view.kind) {
    case 'page':
      return view.page < dashboard.pages.length ? view : { kind: 'pages' };
    case 'section': {
      const page = dashboard.pages[view.page];
      if (!page) return { kind: 'pages' };
      return view.section < page.sections.length ? view : { kind: 'page', page: view.page };
    }
    case 'button':
      return view.button < dashboard.buttons.length ? view : { kind: 'buttons' };
    default:
      return view;
  }
}

/**
 * The menu's branches a screen lies inside, so opening it unfolds the way to
 * it: a section is inside its page, which is inside Pages.
 */
export function branchesOf(view: EditorView): string[] {
  switch (view.kind) {
    case 'sidebar':
      return ['sidebar'];
    case 'page':
      return ['pages'];
    case 'section':
      return ['pages', `page-${view.page}`];
    case 'button':
      return ['buttons'];
    default:
      return [];
  }
}

/** Two screens are the same screen. */
export function sameView(a: EditorView, b: EditorView): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export interface Crumb {
  label: string;
  view?: EditorView;
}

/**
 * The trail after the dashboard's name, each step a way back up. `names`
 * supplies what is shown: translated labels and the dashboard's own names.
 */
export function crumbsOf(
  view: EditorView,
  names: {
    label: (key: string) => string;
    page: (index: number) => string;
    section: (page: number, index: number) => string;
    button: (index: number) => string;
  }
): Crumb[] {
  switch (view.kind) {
    case 'general':
      return [{ label: names.label('tab_general') }];
    case 'sidebar': {
      const part = SIDEBAR_PARTS.find(item => item.part === view.part);
      return [{ label: names.label('tab_sidebar') }, { label: names.label(part?.label ?? view.part) }];
    }
    case 'pages':
      return [{ label: names.label('tab_pages') }];
    case 'page':
      return [{ label: names.label('tab_pages'), view: { kind: 'pages' } }, { label: names.page(view.page) }];
    case 'section':
      return [
        { label: names.label('tab_pages'), view: { kind: 'pages' } },
        { label: names.page(view.page), view: { kind: 'page', page: view.page } },
        { label: names.section(view.page, view.section) },
      ];
    case 'buttons':
      return [{ label: names.label('tab_buttons') }];
    case 'button':
      return [{ label: names.label('tab_buttons'), view: { kind: 'buttons' } }, { label: names.button(view.button) }];
    case 'users':
      return [{ label: names.label('tab_users') }];
    case 'json':
      return [{ label: names.label('tab_json') }];
  }
}
