// LanguageContext.js

import React, { createContext, useContext, useState } from 'react';
import translationsEn from './locales/en.json'; // Путь к файлу с переводами на английский
import translationsRu from './locales/ru.json'; // Путь к файлу с переводами на русский

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // По умолчанию английский

  const getTranslations = () => {
    return language === 'ru' ? translationsRu : translationsEn;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: getTranslations() }}>
      {children}
    </LanguageContext.Provider>
  );
};
