// Sezione Storia
import "../Section.css";
// Dati personalizzabili
import { STORIA_TEXT } from "../../brandConfig";

const StoriaSection = () => (
  <section className="section" id="storia">
    <img
      className="section-bg-image"
      src="/src/assets/walter festa delle rane.jpg"
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
    <h2>Storia</h2>
    <p>{STORIA_TEXT}</p>
  </section>
);

export default StoriaSection;

