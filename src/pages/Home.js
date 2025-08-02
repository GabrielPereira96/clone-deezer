import React, { useState, useEffect } from 'react';
import SongCard from '../components/SongCard';

function Home({ onPlaySong }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchTopSongs = async () => {
      try {
        const response = await fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks');
        const data = await response.json();
        if (data && data.data) {
          setSongs(data.data);
        }
      } catch (error) {
        console.error("Erro ao buscar as músicas:", error);
      }
    };

    fetchTopSongs();
  }, []);

  return (
    <div className="songs-grid">
      {songs.map(song => (
        <SongCard
          key={song.id}
          title={song.title_short}
          artist={song.artist.name}
          cover={song.album.cover_medium}
          onPlaySong={() => onPlaySong(song)}
        />
      ))}
    </div>
  );
}

export default Home;