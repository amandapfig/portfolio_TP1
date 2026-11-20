import { Play, Pause, Shuffle, Github, Clock3, Disc3 } from "lucide-react";
import { PLAYLIST_INFO, TRACKS } from "../data/playlistData";

export function PlaylistHeader({
  activeTrackId,
  onSelectTrack,
  isPlaying,
  onTogglePlay,
  onRandomTrack,
}) {
  return (
    <section className="playlist-hero">
      <div className="hero-banner">
        <div className="playlist-cover">
          <div className="cover-art-ring">
            <Disc3 size={48} className={isPlaying ? "spin-slow" : ""} />
          </div>
          <strong>AMANDA PIMENTA</strong>
        </div>

        <div className="hero-details">
          <span className="public-label">PLAYLIST PÚBLICA</span>
          <h1>{PLAYLIST_INFO.title}</h1>
          <p className="hero-desc">{PLAYLIST_INFO.subtitle}</p>
          <div className="hero-creator">
            <span className="creator-avatar">AP</span>
            <strong>{PLAYLIST_INFO.creator}</strong>
            <span>•</span>
            <span>{TRACKS.length} faixas</span>
            <span>•</span>
      
          </div>
        </div>
      </div>

      <div className="hero-actions">
        <button className="btn-spotify-play" onClick={onTogglePlay}>
          {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
        </button>

        <button className="btn-icon-action" onClick={onRandomTrack} title="Faixa aleatória">
          <Shuffle size={20} />
          <span>Aleatório</span>
        </button>

        <a
          href={PLAYLIST_INFO.githubProfile}
          target="_blank"
          rel="noreferrer"
          className="btn-icon-action"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </div>

      <div className="tracklist-table">
        <div className="tracklist-head">
          <span>#</span>
          <span>TÍTULO</span>
          <span className="hide-sm">ÁLBUM</span>
          <span className="align-right">
            <Clock3 size={15} />
          </span>
        </div>

        {TRACKS.map((track) => {
          const active = track.id === activeTrackId;
          return (
            <button
              key={track.id}
              className={"tracklist-row " + (active ? "active" : "")}
              onClick={() => onSelectTrack(track.id)}
            >
              <span className="row-index">
                {active && isPlaying ? (
                  <span className="mini-eq">
                    <i />
                    <i />
                    <i />
                  </span>
                ) : (
                  track.number
                )}
              </span>

              <span className="row-title">
                <strong>{track.title}</strong>
                <small>{track.subtitle}</small>
              </span>

              <span className="row-album hide-sm">{track.album}</span>
              <span className="row-duration">{track.duration}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
