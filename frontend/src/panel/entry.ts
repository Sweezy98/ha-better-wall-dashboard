/**
 * The URL the panel's entry module was loaded from, `?v=<fingerprint>` and
 * all -- recorded by `panel.tsx` itself, because `import.meta.url` anywhere
 * else is the URL of whichever chunk the bundler put that code in.
 */
let entryUrl: string | null = null;

export function setEntryUrl(url: string): void {
  entryUrl = url;
}

export function getEntryUrl(): string | null {
  return entryUrl;
}
