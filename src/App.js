import React, { useState, useRef, useEffect } from "react";
import songsData from "./data/songs";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import Controls from "./components/Controls";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [songs] = useState(songsData);
  const [filteredSongs, setFilteredSongs] = useState(songsData);

  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  // 🎵 Sync play/pause with state (PRO WAY)
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  // ▶️ Play selected song
  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // ⏭ Next Song
  const nextSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
  };

  // ⏮ Previous Song
  const prevSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
    setIsPlaying(true);
  };

  // ▶️ Toggle Play
  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div className="app">
      <h1>🎵 React Music Player</h1>

      <SearchBar
        songs={songs}
        setFilteredSongs={setFilteredSongs}
      />

      <Player song={currentSong} />

      <Controls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        nextSong={nextSong}
        prevSong={prevSong}
      />

      <Playlist
        songs={filteredSongs}
        playSong={playSong}
        currentSong={currentSong}
      />

      <audio
        ref={audioRef}
        src={currentSong.src}
        onEnded={nextSong}
      />
    </div>
  );
}

export default App;
