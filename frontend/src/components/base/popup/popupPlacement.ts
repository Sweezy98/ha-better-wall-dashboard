import { createContext } from 'react';

/**
 * Popups opened inside the editor's preview: in the tablet's frame, scaled
 * with it, rather than over the whole editor. A modal dialog always goes to
 * the page's top layer, so there they open as plain ones, placed against the
 * frame -- its transform makes it what a fixed element is placed in.
 */
export const PopupInline = createContext(false);

/**
 * Where, inside the frame, the preview's popups are put: a layer over all
 * of it. Left where they are rendered -- in a tile, under the pages' own
 * stacking -- the sidebar painted over them.
 */
export const PopupLayer = createContext<HTMLElement | null>(null);
