import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TRACKS } from "./data/playlistData";
import { EntryExperience } from "./components/EntryExperience";
import { Sidebar } from "./components/Sidebar";
import { PlaylistHeader } from "./components/PlaylistHeader";
import { TrackContent } from "./components/TrackContent";
import "./App.css";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [leavingIntro, setLeavingIntro] = useState(false);
  const [activeTrackId, setActiveTrackId] = useState(TRACKS[0].id);
  const [showPlaylistHome, setShowPlaylistHome] = useState(true);

  const currentIndex = TRACKS.findIndex((t) => t.id === activeTrackId);

  const handleEnter = () => {
    setLeavingIntro(true);
    setTimeout(() => {
      setEntered(true);
      setShowPlaylistHome(true);
      setLeavingIntro(false);
    }, 520);
  };

  const handleSelectTrack = (id) => {
    setActiveTrackId(id);
    setShowPlaylistHome(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + TRACKS.length) % TRACKS.length;
    handleSelectTrack(TRACKS[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % TRACKS.length;
    handleSelectTrack(TRACKS[nextIdx].id);
  };

  const handleRandom = () => {
    const pick = TRACKS[Math.floor(Math.random() * TRACKS.length)];
    handleSelectTrack(pick.id);
  };

  if (!entered) {
    return <EntryExperience onEnter={handleEnter} isLeaving={leavingIntro} />;
  }

  return (
    <div className="spotify-shell">
      <div className="spotify-grid">
        <Sidebar
          activeTrackId={showPlaylistHome ? null : activeTrackId}
          onSelectTrack={handleSelectTrack}
          onBackToIntro={() => setEntered(false)}
        />

        <main className="main-stage">
          {showPlaylistHome ? (
            <PlaylistHeader
              activeTrackId={null}
              onSelectTrack={handleSelectTrack}
              isPlaying={false}
              onTogglePlay={() => handleSelectTrack(TRACKS[0].id)}
              onRandomTrack={handleRandom}
            />
          ) : (
            <div className="track-only-view">
              <div className="track-topbar">
                <button
                  className="btn-back-playlist"
                  onClick={() => {
                    setShowPlaylistHome(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <ArrowLeft size={16} />
                  <span>Voltar para a Playlist</span>
                </button>
              </div>

              <div className="track-content-anchor">
                <TrackContent activeTrackId={activeTrackId} />

                <div className="track-bottom-nav">
                  <button className="btn-track-nav" onClick={handlePrev}>
                    <ArrowLeft size={16} />
                    <span>Faixa anterior</span>
                  </button>

                  <span className="track-counter">
                    Faixa {currentIndex + 1} de {TRACKS.length}
                  </span>

                  <button className="btn-track-nav" onClick={handleNext}>
                    <span>Próxima faixa</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Amanda Pimenta • Engenharia de Software — PUC Minas</p>
          </footer>
        </main>
      </div>
    </div>
  );
}