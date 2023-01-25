import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: "en",
        supportedLngs: ["en", "ru"],
        resources: {
            en: {
                translation: {
                    dropdown: "Select currency",
                    currencyTable: {
                        currentSymbol: "Current symbol",
                        digits: "Digits number",
                        date: "Date",
                        symbol: "Symbol",
                        currency: "Currency",
                    },
                },
            },
            ru: {
                translation: {
                    dropdown: "Выберите валюту",
                    currencyTable: {
                        currentSymbol: "Текущая валюта",
                        digits: "Цифр после запятой",
                        date: "Дата",
                        symbol: "Валюта",
                        currency: "Курс",
                    },
                },
            },
        },
    });

export default i18n;
