import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Values from "./pages/Values";
import Leadership from "./pages/Leadership";
import Experience from "./pages/Experience";
import QA from "./pages/QA";
import Contact from "./pages/Contact";
import CV from "./pages/CV";   // ← ICI, et seulement ici

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/values" element={<Values />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />   {/* ← ICI */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
