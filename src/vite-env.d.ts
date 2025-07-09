/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SCHOOL_NAME: string;
  readonly VITE_PRIMARY_COLOR: string;
  readonly VITE_LOGO_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}