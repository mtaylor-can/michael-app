import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import "./Home.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Section title={t("home.title")}>
      <div className="home-container">
        <img src="/photo.jpg" alt="Michael Taylor" className="profile-photo" />

        <p>{t("home.text")}</p>
      </div>
    </Section>
  );
}
