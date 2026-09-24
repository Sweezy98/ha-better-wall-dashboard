/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// The build goes straight into the integration, because that folder is the
// only thing HACS installs. It is committed; CI rebuilds it and fails if the
// result differs, so the shipped bundle is always the one this source makes.
const OUT_DIR = '../custom_components/better_wall_dashboard/frontend';

// The languages the dashboard itself speaks; see src/lib/i18n.ts.
const LANGUAGES = new Set(['en', 'de']);
const STUB = '\0bwd-empty-locale';

/**
 * Leave ha-component-kit's other translations out of the build.
 *
 * It carries Home Assistant's frontend strings for about sixty languages,
 * 300 kB each, for its own `localize()` -- which this dashboard never calls,
 * having its own strings. Every one of them would still ship: 19 MB that HACS
 * downloads to every install. Only the languages the dashboard speaks are
 * kept; any other resolves to an empty table, which the kit handles as "no
 * translations" rather than as an error.
 */
function onlyOurLanguages(): Plugin {
  return {
    name: 'bwd-only-our-languages',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!importer?.replace(/\\/g, '/').includes('@hakit/core/dist/es/hooks/useLocale/locales/')) return null;
      const match = source.match(/^\.\/([A-Za-z-]+)\/\1\.js$/);
      return match && !LANGUAGES.has(match[1]) ? STUB : null;
    },
    load(id) {
      return id === STUB ? 'export default {};' : null;
    },
  };
}

export default defineConfig({
  // Relative, so every chunk and asset is resolved against the URL the entry
  // module was loaded from. The integration serves the build under its own
  // route, and nothing here should have to know what that route is.
  base: './',
  plugins: [react(), onlyOurLanguages()],
  build: {
    outDir: OUT_DIR,
    emptyOutDir: true,
    target: 'es2022',
    // One entry of ~180 kB gzipped is what a panel is: React, the kit and the
    // dashboard, loaded once per page and cached by fingerprint after that.
    chunkSizeWarningLimit: 800,
    // A module, not a page: Home Assistant loads the entry by URL and
    // defines the panel element from it. There is no index.html to emit.
    rolldownOptions: {
      input: 'src/panel.tsx',
      output: {
        // The entry keeps a fixed name so the integration can find it; its
        // URL carries a content hash instead. Everything else is named after
        // its own contents and can be cached forever.
        entryFileNames: 'better_wall_dashboard.js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  test: {
    include: ['src/**/*.test.ts'],
  },
});
