import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Values() {
  const { t } = useTranslation();

  return (
    <Section title={t("values.title")}>
      <h3>{t("values.integrity")}</h3>
      <p>{t("values.integrity_text")}</p>

      <h3>{t("values.excellence")}</h3>
      <p>{t("values.excellence_text")}</p>

      <h3>{t("values.courage")}</h3>
      <p>{t("values.courage_text")}</p>

      <h3>{t("values.empathy")}</h3>
      <p>{t("values.empathy_text")}</p>

      <h3>{t("values.persistence")}</h3>
      <p>{t("values.persistence_text")}</p>
    </Section>
  );
}
