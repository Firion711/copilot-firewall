// Sezione Storia
import "./style/Section.css";
// Dati personalizzabili
import { STORIA_TEXT } from "./brandConfig";

const StoriaSection = () => (
  <section className="section" id="storia">
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

