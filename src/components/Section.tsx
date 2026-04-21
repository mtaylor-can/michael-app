import "./Section.css";

export default function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}
