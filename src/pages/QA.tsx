import { useTranslation } from "react-i18next";
import "./Home.css"; // pour garder ton style de section

export default function QA() {
  const { t } = useTranslation();

  // On récupère les items sous forme d’objets
  const items = t("qa.items", { returnObjects: true }) as {
    question: string;
    answer: string;
  }[];

  return (
    <div className="section">
      <h1>{t("qa.title")}</h1>
      <p>{t("qa.intro")}</p>

      <div className="qa-list">
        {items.map((item, index) => (
          <div key={index} className="qa-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
