import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { TRACKS } from "./data/playlistData";
import { EntryExperience } from "./components/EntryExperience";
import { Sidebar } from "./components/Sidebar";
import { PlaylistHeader } from "./components/PlaylistHeader";
import { TrackContent } from "./components/TrackContent";
import { PlayerBar } from "./components/PlayerBar";
import "./App.css";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [leavingIntro, setLeavingIntro] = useState(false);
  const [activeTrackId, setActiveTrackId] = useState(TRACKS[0].id);
  const [showPlaylistHome, setShowPlaylistHome] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnter = () => {
    setLeavingIntro(true);
    setTimeout(() => {
      setEntered(true);
      setShowPlaylistHome(true);
      setIsPlaying(false);
      setLeavingIntro(false);
    }, 520);
  };

  const handleSelectTrack = (id) => {
    setActiveTrackId(id);
    setShowPlaylistHome(false);
    setIsPlaying(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    const idx = TRACKS.findIndex((t) => t.id === activeTrackId);
    const prevIdx = (idx - 1 + TRACKS.length) % TRACKS.length;
    handleSelectTrack(TRACKS[prevIdx].id);
  };

  const handleNext = () => {
    const idx = TRACKS.findIndex((t) => t.id === activeTrackId);
    const nextIdx = (idx + 1) % TRACKS.length;
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
          isPlaying={isPlaying}
          onBackToIntro={() => {
            setIsPlaying(false);
            setEntered(false);
          }}
        />

        <main className="main-stage">
          {showPlaylistHome ? (
            <PlaylistHeader
              activeTrackId={null}
              onSelectTrack={handleSelectTrack}
              isPlaying={isPlaying}
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
              </div>
            </div>
          )}
        </main>
      </div>

      <PlayerBar
        activeTrackId={activeTrackId}
        isPlaying={isPlaying}
        onTogglePlay={() => {
          if (showPlaylistHome) {
            handleSelectTrack(activeTrackId);
          } else {
            setIsPlaying((p) => !p);
          }
        }}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}