import { createContext, useContext } from 'react';
import type { Dashboard } from '../../config/types';

/**
 * Every dashboard as last saved, for what a screen offers from the others --
 * the notification prefixes already in use, say.
 */
export const StoredDashboards = createContext<Dashboard[]>([]);

export function useStoredDashboards(): Dashboard[] {
  return useContext(StoredDashboards);
}
