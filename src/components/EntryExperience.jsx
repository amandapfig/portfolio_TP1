import { Play, Disc3, Headphones, Sparkles } from "lucide-react";
import { PLAYLIST_INFO, TRACKS } from "../data/playlistData";

export function EntryExperience({ onEnter, isLeaving }) {
  return (
    <div className={"entry-screen " + (isLeaving ? "leaving" : "")}>
      <div className="entry-glow entry-glow-1" />
      <div className="entry-glow entry-glow-2" />

      <div className="entry-container">
        <div className="entry-pill">
          <Headphones size={15} />
          <span>PORTFÓLIO ACADÊMICO • ENGENHARIA DE SOFTWARE</span>
        </div>

        <div className="entry-showcase">
          <div className="vinyl-wrapper">
            <div className="vinyl-disc">
              <div className="vinyl-center">
                <span>AP</span>
              </div>
            </div>
            <div className="cover-card">
              <Disc3 size={28} className="cover-icon" />
              <strong>A vida como ela é</strong>
              <small>Por Amanda Pimenta</small>
              <div className="entry-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="entry-copy">
            <span className="entry-kicker">
              <Sparkles size={15} /> Bem-vindo(a) à minha playlist
            </span>
            <h1>
              A vida como ela é
            </h1>
            <p>
              Antes de conhecer meu código, aperte o play e conheça um pouco mais sobre mim, faixa por faixa.
            </p>

            <div className="entry-actions">
              <button className="btn-enter" onClick={onEnter}>
                <span className="btn-play-circle">
                  <Play size={18} fill="currentColor" />
                </span>
                Começar a ouvir
              </button>
              <span className="entry-meta">6 faixas • Engenharia de Software PUC Minas</span>
            </div>

            <div className="entry-preview-tracks">
              {TRACKS.slice(0, 3).map((t) => (
                <div key={t.id} className="preview-chip">
                  <span>{t.number}</span>
                  {t.title}
                </div>
              ))}
              <div className="preview-chip muted">+ 3 faixas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
