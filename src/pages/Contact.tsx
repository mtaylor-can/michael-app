import { useTranslation } from "react-i18next";
import "./Home.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="section">
      <h1>{t("contact.title")}</h1>
      <p>{t("contact.text")}</p>

      <div className="contact-info" style={{ marginTop: "20px" }}>
        <p><strong>Téléphone :</strong> {t("contact.phone")}</p>
        <p><strong>Email :</strong> {t("contact.email")}</p>
      </div>
    </div>
  );
}
