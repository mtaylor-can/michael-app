import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Leadership() {
  const { t } = useTranslation();

  return (
    <Section title={t("leadership.title")}>
      <h3>{t("leadership.questioning")}</h3>
      <p>{t("leadership.questioning_text")}</p>

      <h3>{t("leadership.clarity")}</h3>
      <p>{t("leadership.clarity_text")}</p>

      <h3>{t("leadership.predictability")}</h3>
      <p>{t("leadership.predictability_text")}</p>

      <h3>{t("leadership.calm")}</h3>
      <p>{t("leadership.calm_text")}</p>

      <h3>{t("leadership.development")}</h3>
      <p>{t("leadership.development_text")}</p>
    </Section>
  );
}
