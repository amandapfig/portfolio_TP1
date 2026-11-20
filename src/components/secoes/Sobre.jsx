import { useState } from "react";
import { Globe, Sparkles } from "lucide-react";
import { ABOUT_TEXTS } from "../../data/playlistData";

export function Sobre() {
  const [lang, setLang] = useState("pt");
  const about = ABOUT_TEXTS[lang];

  return (
    <section className="track-stage fade-in">
      <div className="stage-header">
        <div>
          <span className="track-kicker">FAIXA 01 • WHO AM I?</span>
          <h2>{about.heading}</h2>
        </div>

        <div className="lang-toggle">
          <Globe size={15} />
          <button
            className={lang === "pt" ? "active" : ""}
            onClick={() => setLang("pt")}
          >
            PT
          </button>
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>

      <div className="glass-card about-profile-card">
        <div className="about-photo-frame">
          <img
            src="/images/amanda.jpg"
            alt="Amanda Pimenta"
            className="about-photo"
          />
        </div>

        <div className="about-profile-info">
          <span className="blue-badge">{about.badge}</span>
          <div className="bio-paragraphs">
            {about.paragraphs.map((texto, index) => (
              <p key={index}>{texto}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="traits-grid">
        {about.traits.map((trait) => (
          <div key={trait.title} className="trait-card">
            <Sparkles size={18} />
            <h3>{trait.title}</h3>
            <p>{trait.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}