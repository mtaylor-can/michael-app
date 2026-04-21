import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <Section title={t("experience.title")}>
      <h3>{t("experience.years")}</h3>
      <p>{t("experience.years_text")}</p>

      <h3>{t("experience.behavior")}</h3>
      <p>{t("experience.behavior_text")}</p>

      <h3>{t("experience.leadership")}</h3>
      <p>{t("experience.leadership_text")}</p>

      <h3>{t("experience.change")}</h3>
      <p>{t("experience.change_text")}</p>

      <h3>{t("experience.coaching")}</h3>
      <p>{t("experience.coaching_text")}</p>
    </Section>
  );
}
