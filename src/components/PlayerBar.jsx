import { Play, Pause, SkipBack, SkipForward, Disc3 } from "lucide-react";
import { TRACKS } from "../data/playlistData";

export function PlayerBar({
  activeTrackId,
  isPlaying,
  onTogglePlay,
  onPrev,
  onNext,
}) {
  const idx = TRACKS.findIndex((t) => t.id === activeTrackId);
  const current = TRACKS[idx] || TRACKS[0];
  const progressPercent = ((idx + 1) / TRACKS.length) * 100;

  return (
    <footer className="player-bar">
      <div className="player-track-info">
        <div className="player-mini-cover">
          <Disc3 size={20} className={isPlaying ? "spin-slow" : ""} />
        </div>
        <div>
          <strong>
            {current.number}. {current.title}
          </strong>
          <small>Amanda Pimenta</small>
        </div>
      </div>

      <div className="player-center">
        <div className="player-buttons">
          <button onClick={onPrev} aria-label="Faixa anterior">
            <SkipBack size={18} />
          </button>
          <button
            className="player-play-btn"
            onClick={onTogglePlay}
            aria-label="Reproduzir ou pausar"
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
          </button>
          <button onClick={onNext} aria-label="Próxima faixa">
            <SkipForward size={18} />
          </button>
        </div>

        <div className="player-progress-wrap">
          <span>00:00</span>
          <div className="player-progress-bar">
            <div className="player-progress-fill" style={{ width: progressPercent + "%" }} />
          </div>
          <span>{current.duration}</span>
        </div>
      </div>

      <div className="player-right" />
    </footer>
  );
}