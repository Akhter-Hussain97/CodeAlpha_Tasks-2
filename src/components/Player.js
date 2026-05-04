import React from "react";

const Player = ({ song }) => {
  // 🛑 Handle empty state (important in real apps)
  if (!song) {
    return (
      <div className="player empty">
        <p>No song selected</p>
      </div>
    );
  }

  return (
    <div className="player">
      
      <div className="player-image">
        <img
          src={song.cover}
          alt={`${song.title} cover`}
          loading="lazy"
        />
      </div>

      <div className="player-info">
        <h2 className="song-title">{song.title}</h2>
        <p className="song-artist">{song.artist}</p>
      </div>

    </div>
  );
};

export default Player;