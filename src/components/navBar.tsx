import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">{t("home.title")}</Link>
        <Link to="/about">{t("about.title")}</Link>
        <Link to="/values">{t("values.title")}</Link>
        <Link to="/leadership">{t("leadership.title")}</Link>
        <Link to="/experience">{t("experience.title")}</Link>
        <Link to="/qa">Q&A</Link>
        <Link to="/contact">{t("contact.title")}</Link>
      </div>

      <div className="nav-right">
        <button onClick={() => changeLanguage("fr")} className="lang-btn">
          FR
        </button>
        <button onClick={() => changeLanguage("en")} className="lang-btn">
          EN
        </button>
      </div>
    </nav>
  );
}
