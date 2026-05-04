import React, { useState, useEffect } from "react";

const SearchBar = ({ songs, setFilteredSongs }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const value = query.trim().toLowerCase();

      if (!value) {
        setFilteredSongs(songs); // reset
        return;
      }

      const filtered = songs.filter((song) => {
        return (
          song.title.toLowerCase().includes(value) ||
          song.artist.toLowerCase().includes(value) ||
          song.genre.toLowerCase().includes(value) ||
          song.album?.toLowerCase().includes(value)
        );
      });

      setFilteredSongs(filtered);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, songs, setFilteredSongs]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search songs, artists, album..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <button onClick={() => setQuery("")} className="clear-btn">
          ✖
        </button>
      )}
    </div>
  );
};

export default SearchBar;