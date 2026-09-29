/**
 * Whether a pointer event started in a popup opened from inside `element`
 * -- a <dialog> that is its descendant in the page though drawn above it --
 * rather than on `element` itself.
 */
export function fromPopup(event: Event, element: Element): boolean {
  const target = event.composedPath()[0];
  if (!(target instanceof Element)) return false;
  const dialog = target.closest('dialog');
  return dialog !== null && element.contains(dialog) && !dialog.contains(element);
}
