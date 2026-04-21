import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  return (
    <button className="lang-btn" onClick={toggle}>
      {i18n.language === "fr" ? "EN" : "FR"}
    </button>
  );
}
