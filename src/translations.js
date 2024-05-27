import enTranslations from './en.json';
import ruTranslations from './ru.json';

export const translations = {
  en: enTranslations,
  ru: ruTranslations,
};

export function getTranslation(section, key, lang) {
  return translations[lang][section][key] || key;
}
