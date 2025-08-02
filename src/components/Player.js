import React, { useState, useRef, useEffect } from 'react';
import './Player.css';

function Player({ currentSong }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100 || 0);
  };

  if (!currentSong) return null;

  const { title, artist, album, preview } = currentSong;

  return (
    <div className="player-container">
      <audio
        ref={audioRef}
        src={preview}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      ></audio>

      <img src={album.cover_small} alt={title} className="album-cover" />
      <div className="song-info">
        <p className="title">{title}</p>
        <p className="artist">{artist.name}</p>
      </div>

      <div className="controls">
        <button onClick={togglePlayPause} className="play-pause-btn">
          {isPlaying ? '❚❚' : '▶'}
        </button>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Player;