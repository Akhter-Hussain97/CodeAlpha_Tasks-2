import React from "react";

const Controls = ({ isPlaying, togglePlay, nextSong, prevSong }) => {
  return (
    <div className="controls" role="group" aria-label="Music controls">
      
      <button
        className="control-btn"
        onClick={prevSong}
        aria-label="Previous Song"
      >
        ⏮
      </button>

      <button
        className="control-btn play-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? "⏸" : "▶️"}
      </button>

      <button
        className="control-btn"
        onClick={nextSong}
        aria-label="Next Song"
      >
        ⏭
      </button>

    </div>
  );
};

export default Controls;