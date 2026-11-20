import { useRef, useState } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);

  const stageRef = useRef(null);

  const handleEnter = () => {
    setLeavingIntro(true);
    setTimeout(() => {
      setEntered(true);
      setIsPlaying(true);
      setLeavingIntro(false);
    }, 520);
  };

  const handleSelectTrack = (id) => {
    setActiveTrackId(id);
    setIsPlaying(true);
    if (stageRef.current) {
      stageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
    const others = TRACKS.filter((t) => t.id !== activeTrackId);
    const pick = others[Math.floor(Math.random() * others.length)];
    handleSelectTrack(pick.id);
  };

  if (!entered) {
    return <EntryExperience onEnter={handleEnter} isLeaving={leavingIntro} />;
  }

  return (
    <div className="spotify-shell">
      <div className="spotify-grid">
        <Sidebar
          activeTrackId={activeTrackId}
          onSelectTrack={handleSelectTrack}
          isPlaying={isPlaying}
          onBackToIntro={() => {
            setIsPlaying(false);
            setEntered(false);
          }}
        />

        <main className="main-stage">
          <PlaylistHeader
            activeTrackId={activeTrackId}
            onSelectTrack={handleSelectTrack}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onRandomTrack={handleRandom}
          />

          <div ref={stageRef} className="track-content-anchor">
            <TrackContent activeTrackId={activeTrackId} />
          </div>
        </main>
      </div>

      <PlayerBar
        activeTrackId={activeTrackId}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying((p) => !p)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}