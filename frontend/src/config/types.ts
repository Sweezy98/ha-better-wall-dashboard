/**
 * The stored dashboard, as the integration sends it.
 *
 * Mirrors `custom_components/better_wall_dashboard/model.py`, which is the
 * authority: it fills every default and bounds every list before anything is
 * stored, so the frontend can rely on each field being present. A field added
 * here must be added there first, or the backend drops it on the next save.
 */

export type EntityId = string;

export interface Tile {
  id: string;
  /** The component to draw, from the library in `components/library`. */
  type: string;
  entity: EntityId;
  name: string;
  icon: string;
  /** Width and height in cells of the section's grid. */
  w: number;
  h: number;
  /** Component-specific settings; each component documents its own. */
  options: Record<string, unknown>;
}

export interface Section {
  id: string;
  name: string;
  icon: string;
  /** Zero to two readings drawn at the right of the header. */
  status: EntityId[];
  columns: number;
  rows: number;
  /** Square cells sized to fit, so 1x1 tiles match across sections. */
  square: boolean;
  tiles: Tile[];
}

export interface Page {
  id: string;
  /** Column split as percentages, e.g. [75, 25]. */
  columns: number[];
  /** Row split as percentages, e.g. [50, 50]. */
  rows: number[];
  /** Filled row by row into the cells of columns x rows. */
  sections: Section[];
}

export interface NamedEntity {
  id: string;
  entity: EntityId;
  name: string;
  icon: string;
}

export interface BarButton {
  id: string;
  name: string;
  icon: string;
  /** Grid columns of the popup the button opens. */
  columns: number;
  tiles: Tile[];
}

export type WifiSecurity = 'WPA' | 'WEP' | 'nopass';

export interface SidebarConfig {
  status: {
    /** The modes shown at the top, left to right, each only while it is on. Wi-Fi is fixed and not one of them. */
    icons?: NamedEntity[];
    wifi_signal: EntityId;
    /** Before `icons`: read by the backend into it, never by the frontend. */
    absence: EntityId;
    guest: EntityId;
    night: EntityId;
  };
  guest_wifi: { qr_image: EntityId; ssid: string; password: string; security: WifiSecurity; hidden: boolean };
  climate: { temperature: EntityId; humidity: EntityId; hours: number };
  persons: EntityId[];
  openings: EntityId[];
  travel: { entity: EntityId; name: string; map_url: string; maps_api_key: string };
  quick_actions: NamedEntity[];
  calendar: { entities: EntityId[]; days: number };
  weather: { entity: EntityId; temperature: EntityId };
  notifications: { enabled: boolean; prefix: string };
  system: NamedEntity[];
}

export interface Dashboard {
  id: string;
  name: string;
  /** Four to eight digits guarding Home Assistant's sidebar; empty for none. Only the editor is sent it. */
  pin?: string;
  background: { image: string; dim: number; blur: number };
  sidebar: SidebarConfig;
  pages: Page[];
  buttons: BarButton[];
}

/** What `better_wall_dashboard/subscribe` pushes to a tablet. */
export interface DashboardView {
  dashboard: Dashboard;
  dashboards: { id: string; name: string }[];
  kiosk: boolean;
  is_admin: boolean;
  /** The dashboard has a PIN, which the integration checks. */
  pin_required: boolean;
  /** Home Assistant's sidebar shows this user only the dashboard. */
  sidebar_only?: boolean;
}

/** What `better_wall_dashboard/document` returns to the editor. */
export interface DashboardDocument {
  dashboards: Record<string, Dashboard>;
  users: Record<string, { dashboard: string; kiosk: boolean }>;
}

export interface DashboardUser {
  id: string;
  name: string;
  is_admin: boolean;
  is_active: boolean;
  dashboard: string;
  kiosk: boolean;
  /** Home Assistant's sidebar shows this user only the dashboard. */
  sidebar_only: boolean;
  /** Whether this user's start page is the dashboard; null if unknown. */
  default_panel: boolean | null;
}

export const LIMITS = {
  pages: 10,
  quickActions: 6,
  statusIcons: 6,
  buttons: 5,
  sectionStatus: 2,
  system: 8,
  sectionCells: 12,
  tiles: 64,
  calendarDays: 14,
} as const;
