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

/**
 * Whether a click on a card that is a button as a whole was meant for
 * something else in it: one of its own buttons or sliders, or a popup it
 * opened. A popup the card itself sits in -- a button's popup of tiles --
 * does not count.
 */
export function pressedInside(event: { target: EventTarget | null; currentTarget: EventTarget | null }, controls: string): boolean {
  const target = event.target as Element | null;
  const card = event.currentTarget as Element | null;
  if (!target || !card) return false;
  const control = target.closest(controls);
  if (control && card.contains(control)) return true;
  // A popup it opened, wherever it is drawn -- the editor's preview puts its
  // popups in a layer of their own, outside the card -- but not one the card sits in.
  const dialog = target.closest('dialog');
  return dialog !== null && !dialog.contains(card);
}
