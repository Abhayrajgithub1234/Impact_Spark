import React from 'react';
import { Gift, MessageCircle, Smartphone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join hundreds of MSMEs already making smarter decisions with RevMind</p>
          
          <div className="cta-buttons">
            <button className="cta-button primary">Start Free Trial</button>
            <button className="cta-button secondary">Schedule Demo</button>
          </div>

          <div className="cta-highlights" style={{display:'flex', gap:'2rem', justifyContent:'center', marginTop:'3rem', flexWrap:'wrap'}}>
            <div className="highlight-item" style={{display:'flex', alignItems:'center', gap:'0.75rem'}}>
              <span className="highlight-icon icon-glow-green" aria-hidden="true" style={{width:'40px', height:'40px', borderRadius:'10px'}}><Gift size={20} /></span>
              <span>14-day free trial</span>
            </div>
            <div className="highlight-item" style={{display:'flex', alignItems:'center', gap:'0.75rem'}}>
              <span className="highlight-icon icon-glow-orange" aria-hidden="true" style={{width:'40px', height:'40px', borderRadius:'10px'}}><MessageCircle size={20} /></span>
              <span>Personal WhatsApp support</span>
            </div>
            <div className="highlight-item" style={{display:'flex', alignItems:'center', gap:'0.75rem'}}>
              <span className="highlight-icon icon-glow-blue" aria-hidden="true" style={{width:'40px', height:'40px', borderRadius:'10px'}}><Smartphone size={20} /></span>
              <span>Works on all devices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
