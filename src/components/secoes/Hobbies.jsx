import { HOBBIES } from "../../data/playlistData";

export function Hobbies() {
  return (
    <section className="track-stage fade-in">
      <div className="stage-header">
        <div>
          <span className="track-kicker">FAIXA 04 • BEYOND THE CODE</span>
          <h2>Além do Código — Hobbies & Personalidade</h2>
        </div>
      </div>

      <div className="beyond-banner">
        <p>
          Um pouco do que faz parte da minha rotina fora da programação: música,
          esportes, viagens e momentos com quem eu gosto.
        </p>
      </div>

      <div className="hobbies-grid">
        {HOBBIES.map((hobby) => (
          <div key={hobby.title} className="hobby-card">
            <div className="hobby-top">
              <span className="hobby-emoji">{hobby.icon}</span>
              <span className="hobby-tag">{hobby.tag}</span>
            </div>
            <p>{hobby.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}