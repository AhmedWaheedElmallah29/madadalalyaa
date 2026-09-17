import { createContext, useContext } from "react";

const LanguageContext = createContext({
  isArabic: true,
  toggleLanguage: () => {}
});

export const useLanguage = () => useContext(LanguageContext);
