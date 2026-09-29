/**
 * The popups open on screen, in the order they were opened: the first dims
 * the page with its backdrop, and each one opened on top of it -- a graph's
 * history over the settings -- dims the popups beneath it rather than the
 * page again, which would darken it a step with every popup.
 *
 * Marks them for the stylesheet (Popup.styled): `data-nested` on all but the
 * first, `data-covered` on all but the last.
 */
const stack: HTMLDialogElement[] = [];

function mark(): void {
  stack.forEach((dialog, index) => {
    dialog.toggleAttribute('data-nested', index > 0);
    dialog.toggleAttribute('data-covered', index < stack.length - 1);
  });
}

export function pushPopup(dialog: HTMLDialogElement): void {
  if (!stack.includes(dialog)) stack.push(dialog);
  mark();
}

/**
 * Off the stack as it starts to close, so the popup beneath brightens with
 * it -- but still `data-nested` until it is gone: its backdrop turning dark
 * for the moment it fades was a blink over the whole screen.
 */
export function removePopup(dialog: HTMLDialogElement): void {
  const index = stack.indexOf(dialog);
  if (index >= 0) stack.splice(index, 1);
  dialog.removeAttribute('data-covered');
  mark();
}

/** Closed: nothing of the stack left on it for the next time it opens. */
export function clearPopup(dialog: HTMLDialogElement): void {
  removePopup(dialog);
  dialog.removeAttribute('data-nested');
}
