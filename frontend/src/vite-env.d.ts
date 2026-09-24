/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** The Home Assistant the dev server connects to. */
  readonly VITE_HA_URL?: string;
  /** Dev only; see .env.development.example. Never bundled into a build. */
  readonly VITE_HA_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
