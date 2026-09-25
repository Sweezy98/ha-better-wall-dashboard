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
  const target = (event.target as Element).closest?.('button, [role="button"], [data-glow]') as HTMLElement | null;
  if (!target) return;
  const box = target.getBoundingClientRect();
  target.style.setProperty('--glow-x', `${event.clientX - box.left}px`);
  target.style.setProperty('--glow-y', `${event.clientY - box.top}px`);
}

/** The surface a press landed on, if it is one that glows -- and not a disabled button. */
function glowingSurface(event: React.PointerEvent): HTMLElement | null {
  for (const node of event.nativeEvent.composedPath()) {
    if (node === event.currentTarget) return null;
    if (!(node instanceof HTMLElement)) continue;
    if (getComputedStyle(node).getPropertyValue('--glow').trim() !== '1') continue;
    return (node as HTMLButtonElement).disabled ? null : node;
  }
  return null;
}

/**
 * A press on something that glows sends a wave out from the point pressed
 * to its farthest corner: a light circle, clipped to the surface's own
 * shape, that grows and fades. Finger or mouse alike; not at all when the
 * system asks for less motion.
 */
export function waveFrom(event: React.PointerEvent): void {
  if (event.button !== 0 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const surface = glowingSurface(event);
  if (!surface) return;
  const box = surface.getBoundingClientRect();
  const x = event.clientX - box.left;
  const y = event.clientY - box.top;
  const radius = Math.hypot(Math.max(x, box.width - x), Math.max(y, box.height - y));
  if (getComputedStyle(surface).position === 'static') surface.style.position = 'relative';

  // A clipping frame the size and shape of the surface, so the wave stays
  // inside it without the surface having to clip its own content.
  const frame = document.createElement('span');
  frame.setAttribute('aria-hidden', 'true');
  frame.style.cssText = 'position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none;';
  const wave = document.createElement('span');
  wave.style.cssText = [
    'position:absolute',
    `left:${x - radius}px`,
    `top:${y - radius}px`,
    `width:${radius * 2}px`,
    `height:${radius * 2}px`,
    'border-radius:50%',
    'background:radial-gradient(circle closest-side, rgba(255,255,255,0.14) 75%, rgba(255,255,255,0) 100%)',
  ].join(';');
  frame.append(wave);
  surface.append(frame);
  wave
    .animate(
      [
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(1)', opacity: 0.8, offset: 0.7 },
        { transform: 'scale(1)', opacity: 0 },
      ],
      { duration: 650, easing: 'cubic-bezier(0.2, 0, 0.2, 1)' }
    )
    .finished.catch(() => undefined)
    .finally(() => frame.remove());
}

/**
 * A glass surface's sheen is a variable, and variables are inherited: a
 * bubble inside the glass sidebar would wear the sidebar's sheen whenever it
 * is hovered. Registered as not inherited, once per page; where the browser
 * cannot register it, the bubble merely gets a faint corner sheen on hover.
 */
export function registerGlowProperties(): void {
  register({ name: '--own-sheen', syntax: '*', inherits: false });
  // Set on each surface that glows, and on nothing inside it.
  register({ name: '--glow', syntax: '*', inherits: false });
  // The page dots' hole: typed, so it animates rather than jumps.
  register({ name: '--dot-hole', syntax: '<percentage>', inherits: false, initialValue: '70%' });
}

function register(definition: PropertyDefinition): void {
  try {
    CSS.registerProperty(definition);
  } catch {
    // Registered already (a second copy of the app), or not supported.
  }
}
