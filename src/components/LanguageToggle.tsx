import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-amber-600 transition-colors"
    >
      <Globe className="w-5 h-5" />
      <span className="font-medium">
        {i18n.language === "en" ? "ID" : "EN"}
      </span>
    </button>
  );
};

export default LanguageToggle;
