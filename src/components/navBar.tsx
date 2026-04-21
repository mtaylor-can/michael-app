import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Michael Taylor</Link>
      </div>

      <div className="nav-right">
        <Link to="/about">À propos</Link>
        <Link to="/values">Valeurs</Link>
        <Link to="/leadership">Leadership</Link>
        <Link to="/experience">Expérience</Link>
        <Link to="/qa">Q&A</Link>
        <Link to="/contact">Contact</Link>
        <LanguageToggle />
      </div>
    </nav>
  );
}
