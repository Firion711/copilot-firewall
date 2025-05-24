import HeroSection from "./sections/Hero/HeroSection";
import StoriaSection from "./sections/Storia/StoriaSection";
import ChiSonoSection from "./sections/ChiSono/ChiSonoSection";
import ProgettiSection from "./sections/Progetti/ProgettiSection";
import CallToActionSection from "./sections/CallToAction/CallToActionSection";
import SocialFeedSection from "./sections/SocialFeed/SocialFeedSection";
import "./sections/Hero/HeroSection.css";
import "./sections/Section.css";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo-navbar" aria-label="Logo">
          <img
            src="/src/assets/logo-no-bgr.png"
            alt="Firewall Spettacolo di Fuoco Logo"
            className="logo-img"
          />
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#storia" onClick={() => setMenuOpen(false)}>
              Storia
            </a>
          </li>
          <li>
            <a href="#chi-sono" onClick={() => setMenuOpen(false)}>
              Chi sono
            </a>
          </li>
          <li>
            <a href="#progetti" onClick={() => setMenuOpen(false)}>
              Progetti
            </a>
          </li>
          <li>
            <a href="#prenota" onClick={() => setMenuOpen(false)}>
              Prenota
            </a>
          </li>
          <li>
            <a href="#social-contatti" onClick={() => setMenuOpen(false)}>
              Contatti & Social
            </a>
          </li>
        </ul>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label="Apri menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className="sections-wrapper">
        <HeroSection />
        <StoriaSection />
        <ChiSonoSection />
        <ProgettiSection />
        <CallToActionSection />
        <SocialFeedSection />
      </div>
    </div>
  );
}

export default App;

