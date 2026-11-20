import { Code2 } from "lucide-react";
import { SKILLS_GROUPS } from "../../data/playlistData";

export function Habilidades() {
  return (
    <section className="track-stage fade-in">
      <div className="stage-header">
        <div>
          <span className="track-kicker">FAIXA 02 • MY SKILLS</span>
          <h2>Habilidades e Tecnologias</h2>
        </div>
      </div>

      <div className="skills-sections">
        {SKILLS_GROUPS.map((grupo) => (
          <div key={grupo.category} className="glass-card">
            <h3 className="group-title">{grupo.category}</h3>
            <div className="skills-grid">
              {grupo.items.map((item) => (
                <div key={item.name} className="skill-pill">
                  <Code2 size={16} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}