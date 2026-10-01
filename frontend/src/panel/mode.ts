import { useSyncExternalStore } from 'react';

/**
 * Which of our two panels is on screen: the dashboard or its editor.
 *
 * Both are the same React root (see mount.tsx) moved into whichever panel
 * element Home Assistant is showing, so switching between them keeps the
 * connection and never mounts ha-component-kit twice.
 */
export type Mode = 'dashboard' | 'editor';

interface ModeState {
  mode: Mode;
  /** Home Assistant's `narrow`: its sidebar is a drawer, so we draw the button that opens it. */
  narrow: boolean;
  /** Inside Home Assistant's own page -- not the dev server -- where its sidebar and the editor's panel exist. */
  embedded: boolean;
}

let state: ModeState = { mode: 'dashboard', narrow: false, embedded: false };
const listeners = new Set<() => void>();

export function setModeState(patch: Partial<ModeState>): void {
  const next = { ...state, ...patch };
  if (next.mode === state.mode && next.narrow === state.narrow && next.embedded === state.embedded) return;
  state = next;
  listeners.forEach(listener => listener());
}

export function getModeState(): ModeState {
  return state;
}

export function useModeState(): ModeState {
  return useSyncExternalStore(
    listener => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => state
  );
}
