import React, { useState } from 'react';
import SongCard from '../components/SongCard';
import './Search.css';

function Search({ onPlaySong }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await fetch(`/search?q=${query}`);
      const data = await response.json();
      if (data && data.data) {
        setResults(data.data);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Erro ao buscar:", error);
      setResults([]);
    }
    setSearched(true);
  };

  return (
    <div className="search-container">
      <h2>Buscar Músicas</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Digite o nome da música ou artista..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="songs-grid">
        {results.length > 0 ? (
          results.map(song => (
            <SongCard
              key={song.id}
              title={song.title_short}
              artist={song.artist.name}
              cover={song.album.cover_medium}
              onPlaySong={() => onPlaySong(song)}
            />
          ))
        ) : (
          searched && <p>Nenhum resultado encontrado para "{query}"</p>
        )}
      </div>
    </div>
  );
}

export default Search;