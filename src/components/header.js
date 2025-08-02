import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <Link to="/" className="logo-link"><h1>Clone Deezer</h1></Link>
      <nav>
        <Link to="/" className="nav-link">Início</Link>
        <Link to="/search" className="nav-link">Buscar</Link>
      </nav>
    </header>
  );
}

export default Header;