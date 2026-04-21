import NavBar from "./NavBar";
import "./Layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
