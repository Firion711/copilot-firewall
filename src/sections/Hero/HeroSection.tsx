// Sezione Hero
import { FIREWALL_HERO_SUBTITLE } from "../../brandConfig";
import "./HeroSection.css";

const HERO_IMAGE = "/src/assets/logo-no-bgr.png";

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
      <img
        src={HERO_IMAGE}
        alt="Firewall Logo"
        className="hero-logo-img"
        style={{ background: "none" }}
      />
      <p>{FIREWALL_HERO_SUBTITLE}</p>
    </div>
  </section>
);

export default HeroSection;

