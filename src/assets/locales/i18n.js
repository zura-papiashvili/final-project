import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "./en.json";
import georgianTranslation from "./ka.json";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("langCode") || "en",
  fallbackLng: localStorage.getItem("langCode") || "en",
  resources: {
    en: {
      translation: englishTranslation,
    },
    ka: {
      translation: georgianTranslation,
    },
  },
});
