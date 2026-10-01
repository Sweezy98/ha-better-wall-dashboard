import { createContext } from 'react';

/**
 * How long a popup stays open untouched before it closes by itself, in
 * milliseconds; 0, never. Set per dashboard (`popup_close_minutes`); two
 * minutes where none is set -- long enough to read a forecast, short enough
 * that the house does not find it still open in the evening.
 */
export const PopupTimeout = createContext(120_000);
