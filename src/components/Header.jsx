import { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <img 
          src="/assets/logo-meajuda-toca.webp" 
          alt="Logo MeAjudaToca - Serviços da região" 
          className="logo" 
        />
        
        <nav className="nav-desktop">
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="nav-mobile" id="mobile-menu">
          <ul>
            <li><a href="/" onClick={() => setIsMenuOpen(false)}>Início</a></li>
            <li><a href="/servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
            <li><a href="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

