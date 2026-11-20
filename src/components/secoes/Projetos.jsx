import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../../data/playlistData";

export function Projetos() {
  return (
    <section className="track-stage fade-in">
      <div className="stage-header">
        <div>
          <span className="track-kicker">FAIXA 03 • MY PROJECTS</span>
          <h2>Projetos Acadêmicos</h2>
        </div>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((projeto) => (
          <article key={projeto.id} className="project-album-card">
            {projeto.image ? (
              <div className="project-media-box">
                <img
                  src={projeto.image}
                  alt={"Preview de " + projeto.title}
                  className="project-media-img"
                />
                <span className="ep-badge">{projeto.trackCode}</span>
              </div>
            ) : (
              <div className={"project-cover " + projeto.accent}>
                <span className="ep-tag">{projeto.trackCode}</span>
                <strong>{projeto.title}</strong>
              </div>
            )}

            <div className="project-card-body">
              <h3>{projeto.title}</h3>
              <p>{projeto.description}</p>

              <div className="tech-pills">
                {projeto.techs.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={projeto.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-github-card"
              >
                <Github size={16} />
                <span>Ver no GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}