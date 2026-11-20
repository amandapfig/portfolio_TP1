import { Disc3, Home, ListMusic, GraduationCap } from "lucide-react";
import { TRACKS } from "../data/playlistData";

export function Sidebar({ activeTrackId, onSelectTrack, isPlaying, onBackToIntro }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand" onClick={onBackToIntro} title="Voltar à tela inicial">
        <div className="brand-badge">
          <Disc3 size={22} className={isPlaying ? "spin-slow" : ""} />
        </div>
        <div>
          <strong>A vida como ela é</strong>
          <span>Amanda Pimenta</span>
        </div>
      </div>

      <div className="sidebar-group">
        <button className="sidebar-link" onClick={onBackToIntro}>
          <Home size={17} />
          <span>Tela Inicial</span>
        </button>
      </div>

      <div className="sidebar-playlist">
        <div className="sidebar-label">
          <ListMusic size={15} />
          <span>SUAS FAIXAS</span>
        </div>

        <nav className="sidebar-tracks">
          {TRACKS.map((track) => {
            const isActive = track.id === activeTrackId;
            return (
              <button
                key={track.id}
                className={"sidebar-track-btn " + (isActive ? "active" : "")}
                onClick={() => onSelectTrack(track.id)}
              >
                <span className="track-num">
                  {isActive && isPlaying ? (
                    <span className="mini-eq">
                      <i />
                      <i />
                      <i />
                    </span>
                  ) : (
                    track.number
                  )}
                </span>
                <span className="track-info">
                  <strong>{track.title}</strong>
                  <small>{track.subtitle}</small>
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-footer-card">
        <GraduationCap size={18} />
        <div>
          <strong>PUC Minas</strong>
          <p>Engenharia de Software • 2026–2029</p>
        </div>
      </div>
    </aside>
  );
}
