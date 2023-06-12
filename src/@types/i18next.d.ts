import resources from './resources.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
