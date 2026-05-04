
import React from "react";

const Playlist = ({ songs, playSong, currentSong }) => {
  if (!songs.length) {
    return <p className="empty-playlist">No songs found</p>;
  }

  return (
    <ul className="playlist">
      {songs.map((song) => {
        const isActive = song.id === currentSong.id;

        return (
          <li
            key={song.id}
            className={`playlist-item ${isActive ? "active" : ""}`}
            onClick={() => playSong(song)}
          >
            {song.title} - {song.artist}
          </li>
        );
      })}
    </ul>
  );
};

export default Playlist;