import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo">
          <Sparkles size={24} color="var(--accent-primary)" />
          <span>LUMYA</span>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#financials">Financials</a>
        </nav>
        <div className="actions">
          <button className="btn btn-secondary">Login</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
