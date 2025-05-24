import "../Section.css";
import { CTA_TEXT, CTA_BUTTON } from "../../brandConfig";

const FIREWALL_PHONE = "+39 348 3253770";

const CallToActionSection = () => (
  <section className="section cta-section" id="prenota">
    <img
      className="section-bg-image"
      src="/src/assets/walter fuoco.jpg"
      alt="Mangiafuoco Festa delle Rane"
      aria-hidden="true"
      style={{
        objectFit: "cover",
        zIndex: 0,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.32,
      }}
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
    <h2>Vuoi vivere la magia dal vivo?</h2>
    <p>{CTA_TEXT}</p>
    <a className="cta-button" href={`tel:${FIREWALL_PHONE}`}>
      {CTA_BUTTON}
    </a>
  </section>
);

export default CallToActionSection;

