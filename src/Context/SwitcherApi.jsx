import { createContext, useState } from "react";

export const LangSwitcher = createContext(null);

const SwitcherApi = ({ children }) => {
  const [lang, setLang] = useState(document.documentElement.lang);
  // const [lang, setLang] = useState(navigator.languages[2]);
  // useEffect
  // Language Switcher
  const languageSwitcher = () => {
    if (lang == "ar") {
      setLang("en");
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    } else {
      setLang("ar");
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    }
  };
  return (
    <LangSwitcher.Provider value={[lang, languageSwitcher]}>
      {children}
    </LangSwitcher.Provider>
  );
};

export default SwitcherApi;
