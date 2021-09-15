import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translationEN from 'assets/languages/en.json';
import translationPT from 'assets/languages/pt.json';

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    pt: {
        translation: translationPT,
    },
};

i18n.use(initReactI18next).init({
    whitelist: ['en', 'pt'],
    nonExplicitWhitelist: true,
    load: 'languageOnly',

    resources,
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    },

    react: {
        useSuspense: true,
    },
});

export default i18n;
