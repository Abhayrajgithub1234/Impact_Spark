import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">AI in Business Analytics</h2>
          <h1 className="hero-heading">Transform Your Business Data into Intelligent Insights</h1>
          <p className="hero-description">
            RevMind empowers MSMEs to harness the power of artificial intelligence, turning routine business data into clear, actionable insights that drive smarter decisions and sustainable growth.
          </p>
          <button className="cta-button primary">Discover RevMind</button>
        </div>
        <div className="hero-image">
          <div className="hero-visual premium-image-container">
            <img src="/images/hero-image.png" alt="AI and Business Analytics Dashboard" className="premium-hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
