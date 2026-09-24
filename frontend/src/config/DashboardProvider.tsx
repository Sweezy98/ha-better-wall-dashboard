import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { DashboardView } from './types';
import { useSubscription } from '../hooks/useSubscription';
import { setKioskWanted } from '../panel/kiosk';

interface DashboardContextValue {
  view: DashboardView | null;
  error: string | null;
  /** Preview another dashboard on this device (admins, from the editor). */
  preview: (id: string | null) => void;
  previewing: string | null;
  /** The editor's preview: the page it is editing, which the swiper turns to. */
  focusPage?: number;
}

const DashboardContext = createContext<DashboardContextValue>({ view: null, error: null, preview: () => undefined, previewing: null });

const PREVIEW_KEY = 'better-wall-dashboard:preview';

// Browser storage can be missing or throw (private windows, cleared site
// data, the companion app's webview on some Android builds); a preview is a
// convenience, so it degrades to "none" rather than breaking the dashboard.
function readPreview(): string | null {
  try {
    return new URLSearchParams(window.location.search).get('dashboard') || window.localStorage.getItem(PREVIEW_KEY);
  } catch {
    return null;
  }
}

function writePreview(id: string | null): void {
  try {
    if (id) window.localStorage.setItem(PREVIEW_KEY, id);
    else window.localStorage.removeItem(PREVIEW_KEY);
  } catch {
    // see readPreview
  }
}

/**
 * The dashboard this user sees, pushed by the integration.
 *
 * All of it lives in Home Assistant -- entities, Wi-Fi details, map keys --
 * and arrives here over the websocket. Nothing about a particular house is
 * in the bundle, which is why the same build serves every install.
 */
export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [view, setView] = useState<DashboardView | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewing, setPreviewing] = useState<string | null>(readPreview);

  useSubscription<DashboardView>(
    previewing ?? '',
    () => ({ type: 'better_wall_dashboard/subscribe', dashboard: previewing }),
    event => {
      setError(null);
      setView(event);
    },
    failure => setError(failure.code ?? failure.message ?? 'error')
  );

  useEffect(() => {
    setKioskWanted(Boolean(view?.kiosk));
  }, [view?.kiosk]);

  const preview = useCallback((id: string | null) => {
    writePreview(id);
    setPreviewing(id);
  }, []);

  const value = useMemo(() => ({ view, error, preview, previewing }), [view, error, preview, previewing]);
  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

/**
 * A dashboard that is not stored yet: the editor's draft, drawn by the same
 * components the tablet uses. No subscription and no kiosk mode -- it is a
 * picture of the dashboard, not a tablet.
 */
export const DashboardViewProvider: React.FC<{ view: DashboardView; focusPage?: number; children: React.ReactNode }> = ({
  view,
  focusPage,
  children,
}) => {
  const value = useMemo(() => ({ view, error: null, preview: () => undefined, previewing: null, focusPage }), [view, focusPage]);
  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useDashboardContext() {
  return useContext(DashboardContext);
}

/** The dashboard being shown. Only called below the point it has loaded. */
// eslint-disable-next-line react-refresh/only-export-components
export function useDashboard() {
  const { view } = useContext(DashboardContext);
  if (!view) throw new Error('useDashboard() before the dashboard has loaded');
  return view.dashboard;
}
