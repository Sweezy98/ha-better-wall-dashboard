/**
 * Where the mouse is on the button it hovers, for the glow that follows it
 * (see themes/interaction.ts).
 *
 * One listener for the whole dashboard -- popups included, which sit inside
 * it -- writing the pointer's position on the hovered button as two CSS
 * variables. Mouse only: a finger has no hover to follow.
 */
export function trackGlow(event: React.PointerEvent): void {
  if (event.pointerType !== 'mouse') return;
  const target = (event.target as Element).closest?.('button, [role="button"]') as HTMLElement | null;
  if (!target) return;
  const box = target.getBoundingClientRect();
  target.style.setProperty('--glow-x', `${event.clientX - box.left}px`);
  target.style.setProperty('--glow-y', `${event.clientY - box.top}px`);
}

/**
 * A glass surface's sheen is a variable, and variables are inherited: a
 * bubble inside the glass sidebar would wear the sidebar's sheen whenever it
 * is hovered. Registered as not inherited, once per page; where the browser
 * cannot register it, the bubble merely gets a faint corner sheen on hover.
 */
export function registerGlowProperties(): void {
  try {
    CSS.registerProperty({ name: '--own-sheen', syntax: '*', inherits: false });
  } catch {
    // Registered already (a second copy of the app), or not supported.
  }
}
