// Sezione Chi Sono
import "../Section.css";
import { CHI_SONO_TEXT } from "../../brandConfig";

// Componente ChiSonoSection
const ChiSonoSection = () => (
  <section className="section" id="chi-sono">
    <img
      className="section-bg-image"
      src="/src/assets/walter mangiafuoco.jpg"
      alt="Mangiafuoco Chi Sono"
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
    <h2>Chi sono</h2>
    <p>{CHI_SONO_TEXT}</p>
  </section>
);

export default ChiSonoSection;

