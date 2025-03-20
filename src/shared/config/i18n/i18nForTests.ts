import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: { 
      useSuspense: false //   <---- this will do the magic
    }

    // resources: { ru: { translations: {} } },
  });

export default i18n;