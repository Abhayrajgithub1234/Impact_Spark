import { useState } from 'react';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('persona');

  return (
    <section id="demo" className="section container">
      <div className="section-header">
        <span className="section-badge">Interactive Experience</span>
        <h2 className="section-title">See Lumya in Action</h2>
      </div>
      <div className="demo-container glass-panel" style={{ padding: '2.5rem' }}>
        <div className="demo-sidebar">
          <button className={`demo-tab ${activeTab === 'persona' ? 'active' : ''}`} onClick={() => setActiveTab('persona')}>1. PersonaGen Targeting</button>
          <button className={`demo-tab ${activeTab === 'copy' ? 'active' : ''}`} onClick={() => setActiveTab('copy')}>2. CopyCrafter Generation</button>
          <button className={`demo-tab ${activeTab === 'budget' ? 'active' : ''}`} onClick={() => setActiveTab('budget')}>3. SmartBudgetor Allocation</button>
        </div>
        <div className="demo-content">
          {activeTab === 'persona' && (
            <div className="demo-panel">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>Target Audience Analysis</h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Fitness Enthusiasts', 'Tech Early Adopters', 'Eco-Conscious Shoppers'].map(tag => (
                  <span key={tag} style={{ background: 'var(--bg-primary)', border: '1px solid var(--panel-border)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{tag}</span>
                ))}
              </div>
              <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--bg-primary)', border: '1px solid var(--panel-border)', borderRadius: '0.75rem', borderLeft: '4px solid var(--accent-primary)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>"PersonaGen detected a 40% higher engagement rate from Eco-Conscious Shoppers in the last 7 days."</p>
              </div>
            </div>
          )}
          {activeTab === 'copy' && (
            <div className="demo-panel">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>Generated Ad Copy</h3>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--panel-border)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>Variant A (High Intent)</span>
                  <p style={{ marginTop: '0.75rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>Upgrade your everyday carry with our sustainable tech essentials. Buy now and get 20% off.</p>
                </div>
                <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--panel-border)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>Variant B (Emotional)</span>
                  <p style={{ marginTop: '0.75rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>Join the movement. Discover gear that looks good and does good for the planet.</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'budget' && (
            <div className="demo-panel">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>Budget Recommendation</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <span>Instagram Ads</span>
                    <span style={{ color: 'var(--text-primary)' }}>55%</span>
                  </div>
                  <div style={{ height: '8px', background: 'var(--bg-primary)', border: '1px solid var(--panel-border)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '55%', height: '100%', background: 'var(--accent-primary)', borderRadius: '4px' }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <span>Google Search</span>
                    <span style={{ color: 'var(--text-primary)' }}>30%</span>
                  </div>
                  <div style={{ height: '8px', background: 'var(--bg-primary)', border: '1px solid var(--panel-border)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '30%', height: '100%', background: 'var(--text-muted)', borderRadius: '4px' }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <span>LinkedIn</span>
                    <span style={{ color: 'var(--text-primary)' }}>15%</span>
                  </div>
                  <div style={{ height: '8px', background: 'var(--bg-primary)', border: '1px solid var(--panel-border)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '15%', height: '100%', background: 'var(--panel-border)', borderRadius: '4px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;
