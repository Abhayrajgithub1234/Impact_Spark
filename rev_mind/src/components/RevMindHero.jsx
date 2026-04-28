import React from 'react';

const RevMindHero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">AI in Business Analytics</h2>
          <h1 className="hero-heading">Transform Your Business Data into Intelligent Insights</h1>
          <p className="hero-description">
            RevMind empowers MSMEs to harness the power of artificial intelligence.
          </p>
          {/* Fixed invalid href causing build failure */}
          <a href="#discover" className="cta-button primary">Discover RevMind</a>
        </div>
      </div>
    </section>
  );
};

export default RevMindHero;
