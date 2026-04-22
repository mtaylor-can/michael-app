import { useTranslation } from "react-i18next";

export default function CV() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: "2rem" }}>
      <h1>{t("cv.title")}</h1>

      <ul style={{ marginTop: "1rem", lineHeight: "2rem" }}>
        <li>
          <a href="/cv-fr.pdf" download>{t("cv.cv_fr")}</a>
        </li>
        <li>
          <a href="/cv-en.pdf" download>{t("cv.cv_en")}</a>
        </li>
      </ul>
    </section>
  );
}
