import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section title={t("about.title")}>
      <p>{t("about.text")}</p>
    </Section>
  );
}
