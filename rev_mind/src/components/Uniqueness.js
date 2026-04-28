import React from 'react';
import { Building2, Wallet, Compass, MapPin, Cloud, UserCheck } from 'lucide-react';

const Uniqueness = () => {
  return (
    <section className="uniqueness">
      <div className="container">
        <h2 className="section-title">What Makes RevMind Unique</h2>
        
        <div className="uniqueness-grid">
          <div className="unique-item">
            <div className="unique-icon" aria-hidden="true"><Building2 size={28} /></div>
            <h3>Built for MSMEs</h3>
            <p>Specifically designed with the needs, budget, and context of small and medium enterprises in mind. Not a generic tool for enterprises.</p>
            <div className="unique-highlight">Industry-focused solutions that actually address MSME pain points</div>
          </div>

          <div className="unique-item">
            <div className="unique-icon" aria-hidden="true"><Wallet size={28} /></div>
            <h3>Affordable & Scalable</h3>
            <p>Enterprise-grade AI at a fraction of the cost. Start small and grow your subscription as your business expands.</p>
            <div className="unique-highlight">Scales with your business, not against your budget</div>
          </div>

          <div className="unique-item">
            <div className="unique-icon" aria-hidden="true"><Compass size={28} /></div>
            <h3>Actionable, Not Just Data</h3>
            <p>We do not just show you data. We tell you what it means and what to do about it. Every insight comes with recommended actions.</p>
            <div className="unique-highlight">From insights to implementation guidance in one platform</div>
          </div>

          <div className="unique-item">
            <div className="unique-icon" aria-hidden="true"><MapPin size={28} /></div>
            <h3>Localized for India</h3>
            <p>Hindi support, Indian business context, WhatsApp assistance, and local payment options. This is AI built for Indian MSMEs.</p>
            <div className="unique-highlight">Language barriers and cultural differences disappear</div>
          </div>

          <div className="unique-item">
            <div className="unique-icon" aria-hidden="true"><Cloud size={28} /></div>
            <h3>Offline + Cloud Ready</h3>
            <p>Use RevMind both online and offline. Your data is always accessible, internet or not.</p>
            <div className="unique-highlight">Flexibility to work in any environment</div>
          </div>

          <div className="unique-item">
            <div className="unique-icon" aria-hidden="true"><UserCheck size={28} /></div>
            <h3>No Technical Expertise Needed</h3>
            <p>No coding, no data science degree required. If you can upload a file, you can use RevMind.</p>
            <div className="unique-highlight">AI democratized for everyone</div>
          </div>
        </div>

        <div className="competitive-advantage">
          <h3>RevMind vs. Others</h3>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comp-col">Feature</div>
              <div className="comp-col">RevMind</div>
              <div className="comp-col">Traditional Tools</div>
            </div>
            <div className="comparison-row">
              <div className="comp-col"><strong>Built for MSMEs</strong></div>
              <div className="comp-col comp-yes">Yes</div>
              <div className="comp-col comp-no">Generic</div>
            </div>
            <div className="comparison-row">
              <div className="comp-col"><strong>AI Insights Included</strong></div>
              <div className="comp-col comp-yes">Included</div>
              <div className="comp-col comp-no">Extra Cost</div>
            </div>
            <div className="comparison-row">
              <div className="comp-col"><strong>Offline + Cloud</strong></div>
              <div className="comp-col comp-yes">Both</div>
              <div className="comp-col comp-no">Cloud Only</div>
            </div>
            <div className="comparison-row">
              <div className="comp-col"><strong>Affordable Pricing</strong></div>
              <div className="comp-col comp-yes">Starts Low</div>
              <div className="comp-col comp-no">Expensive</div>
            </div>
            <div className="comparison-row">
              <div className="comp-col"><strong>Local Language Support</strong></div>
              <div className="comp-col comp-yes">Yes</div>
              <div className="comp-col comp-no">English Only</div>
            </div>
            <div className="comparison-row">
              <div className="comp-col"><strong>Actionable Recommendations</strong></div>
              <div className="comp-col comp-yes">Built-In</div>
              <div className="comp-col comp-no">Self-Serve</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uniqueness;
