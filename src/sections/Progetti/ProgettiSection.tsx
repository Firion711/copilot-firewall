// Sezione Extra: Progetti
import "../Section.css";
import { PROGETTI_TEXT } from "../../brandConfig";

const ProgettiSection = () => (
  <section className="section" id="progetti">
    <img
      className="section-bg-image"
      src="/src/assets/walter spettacolo pirotecnico.jpg"
      alt="Spettacolo Pirotecnico Progetti"
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
    <h2>Progetti</h2>
    <p>{PROGETTI_TEXT}</p>
  </section>
);

export default ProgettiSection;

