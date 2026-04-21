import NavBar from "./navBar";
import "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
