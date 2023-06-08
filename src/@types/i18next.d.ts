import enTranslation from './locales/en/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof enTranslation;
    };
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next init options)
    // returnNull: false;
  }
}
