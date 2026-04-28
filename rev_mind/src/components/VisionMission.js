import React from 'react';
import { Eye, Target, TrendingUp, Plus, Brain, Equal, Zap } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="vision-mission">
      <div className="container">
        <h2 className="section-title">Our Vision & Mission</h2>
        
        <div className="vision-mission-grid">
          <div className="vision-card">
            <div className="card-icon icon-glow-blue" aria-hidden="true"><Eye size={32} /></div>
            <h3>Our Vision</h3>
            <p>To make every Indian MSME future-ready by unlocking the real value of their business data, so they can take smarter decisions, grow confidently, and stay strong in a changing world.</p>
            <div className="vision-highlight">
              <p>We believe data is the competitive advantage for every business, regardless of size.</p>
            </div>
          </div>

          <div className="mission-card">
            <div className="card-icon icon-glow-orange" aria-hidden="true"><Target size={32} /></div>
            <h3>Our Mission</h3>
            <p>To provide affordable, intelligent, and easy-to-use AI tools that turn everyday business data into meaningful insights, enabling MSMEs to make quick decisions, serve customers better, and increase profits without needing technical expertise.</p>
            <div className="mission-highlight">
              <p>Making enterprise-grade AI accessible to every business, no matter how small.</p>
            </div>
          </div>
        </div>

        <div className="meaning-section">
          <h3>Why "RevMind"?</h3>
          <div className="meaning-content">
            <div className="meaning-item">
              <span className="meaning-label icon-glow-green" style={{display:'inline-flex', padding:'10px', borderRadius:'12px'}}><TrendingUp size={24} /></span>
              <p style={{marginTop:'1rem'}}><strong>Revenue:</strong> Represents money, growth, and business success.</p>
            </div>
            <div className="meaning-item" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <span className="meaning-label" style={{opacity: 0.5}}><Plus size={32} /></span>
            </div>
            <div className="meaning-item">
              <span className="meaning-label icon-glow-blue" style={{display:'inline-flex', padding:'10px', borderRadius:'12px'}}><Brain size={24} /></span>
              <p style={{marginTop:'1rem'}}><strong>Mind:</strong> Represents intelligence, smart thinking, and wise decisions.</p>
            </div>
            <div className="meaning-item" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <span className="meaning-label" style={{opacity: 0.5}}><Equal size={32} /></span>
            </div>
            <div className="meaning-item">
              <span className="meaning-label icon-glow-orange" style={{display:'inline-flex', padding:'10px', borderRadius:'12px'}}><Zap size={24} /></span>
              <p style={{marginTop:'1rem'}}><strong>RevMind:</strong> A Smart Mind That Thinks For Your Business To Increase Your Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
