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

export function removePopup(dialog: HTMLDialogElement): void {
  const index = stack.indexOf(dialog);
  if (index >= 0) stack.splice(index, 1);
  dialog.removeAttribute('data-nested');
  dialog.removeAttribute('data-covered');
  mark();
}
