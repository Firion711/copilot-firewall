// Sezione Hero
import "./style/HeroSection.css";
import { FIREWALL_HERO_TITLE, FIREWALL_HERO_SUBTITLE } from "./brandConfig";

const HERO_IMAGE = "/src/assets/logo-firewall.png";

// Dati personalizzabili globali
export const FIREWALL_NAME = "Firewall Official";
export const FIREWALL_EMAIL = "info@mangiafuoco-parrucchiere.com";
export const FIREWALL_INSTAGRAM =
  "https://www.instagram.com/firewall_official_/";
export const FIREWALL_FACEBOOK = "https://www.facebook.com/";

const HeroSection = () => (
  <section className="hero-section">
    <img
      className="hero-bg-image"
      src="/src/assets/Sputafuoco/2023-12-27 15.16.17.jpg"
      alt="Mangiafuoco Hero Background"
      aria-hidden="true"
    />
    <video
      className="section-bg-video"
      src="/src/assets/fire-debris.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
    <div className="hero-content">
      <img src={HERO_IMAGE} alt="Firewall Logo" className="hero-logo-img" />
      <h1>{FIREWALL_HERO_TITLE}</h1>
      <p>{FIREWALL_HERO_SUBTITLE}</p>
    </div>
  </section>
);

export default HeroSection;

