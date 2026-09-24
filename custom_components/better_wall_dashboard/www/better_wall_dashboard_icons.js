/**
 * The dashboard's own icon, as an icon rather than a picture.
 *
 * Home Assistant's sidebar takes an icon name, not an image, so the mark from
 * the brand icon is redrawn the way Material Design Icons are drawn: 24 by 24,
 * one colour, inheriting whatever colour the sidebar gives it. It is the same
 * idea -- a tablet on its side, the sidebar down its left, tiles to the right
 * -- with everything that cannot survive at 24 pixels taken out.
 *
 * Registered through `window.customIconsets`, which is how Home Assistant lets
 * anything outside core contribute icons. Named `better-wall-dashboard:tablet`.
 *
 * Plain JavaScript, loaded on its own: it has to reach the app shell, which
 * draws the sidebar long before the dashboard's bundle is ever fetched.
 */

const TABLET = [
  // The frame, and the screen inside it wound the other way so a plain
  // nonzero fill leaves a hole rather than a slab.
  "M3.5 4h17A2.5 2.5 0 0 1 23 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 17.5v-11A2.5 2.5 0 0 1 3.5 4z",
  "M2.8 5.8v12.4h18.4V5.8z",
  // The sidebar.
  "M4.6 7.6h3.8v8.8H4.6z",
  // Four tiles.
  "M10 7.6h4.3v3.9H10z",
  "M15.3 7.6h4.3v3.9h-4.3z",
  "M10 12.5h4.3v3.9H10z",
  "M15.3 12.5h4.3v3.9h-4.3z",
].join(" ");

const ICONS = { tablet: TABLET };

window.customIconsets = window.customIconsets || {};
window.customIconsets["better-wall-dashboard"] = async (name) => ({
  // An unknown name falls back to the tablet rather than to nothing: a blank
  // square in the sidebar is worse than the wrong glyph.
  path: ICONS[name] || TABLET,
});
