import { useState } from "react";
import { Disc3, Home, ListMusic, GraduationCap, Menu, X } from "lucide-react";
import { TRACKS } from "../data/playlistData";

export function Sidebar({ activeTrackId, onSelectTrack, onBackToIntro }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTrackClick = (id) => {
    setMenuOpen(false);
    onSelectTrack(id);
  };

  const handleIntroClick = () => {
    setMenuOpen(false);
    onBackToIntro();
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-top-row">
        <div
          className="sidebar-brand"
          onClick={handleIntroClick}
          title="Voltar à tela inicial"
        >
          <div className="brand-badge">
            <Disc3 size={22} />
          </div>
          <div>
            <strong>Amanda Pimenta</strong>
            <span>A vida como ela é</span>
          </div>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={"sidebar-drawer " + (menuOpen ? "open" : "")}>
        <div className="sidebar-group">
          <button className="sidebar-link" onClick={handleIntroClick}>
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
                  onClick={() => handleTrackClick(track.id)}
                >
                  <span className="track-num">{track.number}</span>
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
      </div>
    </aside>
  );
}