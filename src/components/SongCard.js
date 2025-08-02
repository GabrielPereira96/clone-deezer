import React from 'react';
import './SongCard.css';

function SongCard({ title, artist, cover, onPlaySong }) {
  return (
    <div className="song-card" onClick={onPlaySong}>
      <img src={cover} alt={title} className="song-cover" />
      <div className="song-card-info">
        <p className="song-title">{title}</p>
        <p className="song-artist">{artist}</p>
      </div>
    </div>
  );
}

export default SongCard;