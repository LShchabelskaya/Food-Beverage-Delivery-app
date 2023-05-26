import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import ua from './ua.js';
import en from './en.js';

export const resources = {
    ua: { translation: ua },
    en: { translation: en },
};

export const appLocales = Object.keys(resources);

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: appLocales,
        react: {
            useSuspence: true,
        },
    });

export default i18n;