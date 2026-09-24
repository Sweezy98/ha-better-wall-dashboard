/** Pure helpers for the editor's lists. */

export function move<T>(items: T[], from: number, to: number): T[] {
  if (to < 0 || to >= items.length) return items;
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

/** A short random id, the same shape the backend generates. */
export function newId(): string {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}

/** A copy that shares nothing with what it was made from. */
export const copyOf = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

/** A list with one item replaced. */
export const replaceAt = <T>(items: T[], index: number, item: T): T[] => items.map((existing, i) => (i === index ? item : existing));
