import React from 'react';

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon" aria-hidden="true">RM</div>
          <div className="logo-text">
            <h1>RevMind</h1>
            <p className="tagline">Smarter Decisions, Instantly</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#workflow">How It Works</a>
          <a href="#contact">Get Started</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
