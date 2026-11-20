import { GraduationCap, Languages } from "lucide-react";
import { EDUCATION, LANGUAGES } from "../../data/playlistData";

export function Formacao() {
  return (
    <section className="track-stage fade-in">
      <div className="stage-header">
        <div>
          <span className="track-kicker">FAIXA 05 • MY JOURNEY</span>
          <h2>Formação Acadêmica & Idiomas</h2>
        </div>
      </div>

      <div className="journey-grid">
        <div className="glass-card journey-card">
          <div className="journey-icon">
            <GraduationCap size={24} />
          </div>
          <span className="blue-badge">{EDUCATION.period}</span>
          <h3>{EDUCATION.degree}</h3>
          <p className="institution-name">{EDUCATION.institution}</p>
          <p className="journey-note">
            Desenvolvendo base em algoritmos, programação orientada a objetos,
            desenvolvimento web e trabalho em equipe, em busca do meu primeiro estágio.
          </p>
        </div>

        <div className="glass-card journey-card">
          <div className="journey-icon">
            <Languages size={24} />
          </div>
          <h3>Idiomas</h3>
          <div className="languages-list">
            {LANGUAGES.map((idioma) => (
              <div key={idioma.name} className="language-row">
                <strong>{idioma.name}</strong>
                <span className="blue-badge">{idioma.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}