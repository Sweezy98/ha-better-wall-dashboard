import { describe, expect, it } from 'vitest';
import { branchesOf, clampView, crumbsOf, sameView } from './editorNav';

const dashboard = { pages: [{ sections: [{}, {}] }, { sections: [] }], buttons: [{}] };

describe('clampView', () => {
  it('keeps a screen that still exists', () => {
    expect(clampView({ kind: 'section', page: 0, section: 1 }, dashboard)).toEqual({ kind: 'section', page: 0, section: 1 });
  });

  it('falls back to the nearest screen above one that was removed', () => {
    expect(clampView({ kind: 'section', page: 1, section: 0 }, dashboard)).toEqual({ kind: 'page', page: 1 });
    expect(clampView({ kind: 'section', page: 5, section: 0 }, dashboard)).toEqual({ kind: 'pages' });
    expect(clampView({ kind: 'page', page: 2 }, dashboard)).toEqual({ kind: 'pages' });
    expect(clampView({ kind: 'button', button: 1 }, dashboard)).toEqual({ kind: 'buttons' });
  });
});

describe('branchesOf', () => {
  it('unfolds the way to a section', () => {
    expect(branchesOf({ kind: 'section', page: 1, section: 0 })).toEqual(['pages', 'page-1']);
    expect(branchesOf({ kind: 'sidebar', part: 'weather' })).toEqual(['sidebar']);
    expect(branchesOf({ kind: 'general' })).toEqual([]);
  });
});

describe('crumbsOf', () => {
  const names = {
    label: (key: string) => key,
    page: (index: number) => `Page ${index + 1}`,
    section: (_page: number, index: number) => `Section ${index + 1}`,
    button: (index: number) => `Button ${index + 1}`,
  };

  it('leads back up from a section, the last step not a link', () => {
    const crumbs = crumbsOf({ kind: 'section', page: 0, section: 1 }, names);
    expect(crumbs.map(crumb => crumb.label)).toEqual(['tab_pages', 'Page 1', 'Section 2']);
    expect(crumbs[1].view).toEqual({ kind: 'page', page: 0 });
    expect(crumbs[2].view).toBeUndefined();
  });

  it('names a sidebar part by its label', () => {
    expect(crumbsOf({ kind: 'sidebar', part: 'weather' }, names).map(crumb => crumb.label)).toEqual(['tab_sidebar', 'weather']);
  });
});

describe('sameView', () => {
  it('compares screens by what they show', () => {
    expect(sameView({ kind: 'page', page: 1 }, { kind: 'page', page: 1 })).toBe(true);
    expect(sameView({ kind: 'page', page: 1 }, { kind: 'page', page: 2 })).toBe(false);
  });
});
