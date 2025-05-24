import "../Section.css";
import {
  FIREWALL_INSTAGRAM,
  FIREWALL_FACEBOOK,
  SOCIAL_NOTE,
} from "../../brandConfig";
import { FaInstagram, FaFacebookF, FaPhone } from "react-icons/fa";

const FIREWALL_PHONE = "+39 348 3253770";

const SocialContattiSection = () => (
  <section className="section social-section" id="social-contatti">
    <video
      className="section-bg-video"
      src="/src/assets/fire-debris.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
    <h2>Contatti & Social</h2>
    <img
      src="/src/assets/Sputafuoco/2023-12-27 15.05.14.jpg"
      alt="Logo Contatti & Social"
      className="hero-logo-img"
      style={{
        width: "180px",
        height: "180px",
        objectFit: "cover",
        borderRadius: "50%",
        margin: "0 auto 1.5rem auto",
        display: "block",
        boxShadow: "0 0 32px var(--fire-orange)",
        background: "var(--fire-dark)",
        position: "relative",
        zIndex: 2,
      }}
    />
    <div className="social-feed-icons">
      <a
        href={FIREWALL_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="social-icon-link social-instagram"
      >
        <FaInstagram className="social-icon-svg" />
      </a>
      <a
        href={FIREWALL_FACEBOOK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="social-icon-link social-facebook"
      >
        <FaFacebookF className="social-icon-svg" />
      </a>
      <a
        href={`tel:${FIREWALL_PHONE}`}
        aria-label="Telefono"
        className="social-icon-link social-email"
      >
        <FaPhone
          className="social-icon-svg"
          style={{ transform: "scaleX(-1)" }}
        />
      </a>
    </div>
    <p className="social-note">{SOCIAL_NOTE}</p>
    <div style={{ marginTop: "2rem" }}>
      <p>
        Vuoi un taglio originale o uno spettacolo di fuoco per il tuo evento?
        <br />
        Chiama il <a href={`tel:${FIREWALL_PHONE}`}>{FIREWALL_PHONE}</a> oppure
        seguimi su
        <a href={FIREWALL_INSTAGRAM} target="_blank" rel="noopener noreferrer">
          {" "}
          Instagram
        </a>{" "}
        per scoprire dove si accenderà la prossima fiamma!
      </p>
    </div>
  </section>
);

export default SocialContattiSection;

