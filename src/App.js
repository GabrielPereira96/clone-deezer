import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Nossos componentes e páginas
import Header from './components/header';
import Home from './pages/Home';
import Search from './pages/Search';
import Player from './components/Player';

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="App">
      <Header />

      <main className="App-content">
        <Routes>
          <Route path="/" element={<Home onPlaySong={handlePlaySong} />} />
          <Route path="/search" element={<Search onPlaySong={handlePlaySong} />} />
        </Routes>
      </main>

      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;