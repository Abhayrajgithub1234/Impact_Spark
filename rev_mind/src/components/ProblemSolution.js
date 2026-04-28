import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="problem-solution">
      <div className="container">
        <h2 className="section-title">The Challenge & Our Solution</h2>
        
        <div className="problem-solution-grid">
          <div className="problem-box">
            <div className="box-icon" aria-hidden="true"><AlertCircle size={28} /></div>
            <h3>The Problem</h3>
            <p>Many MSMEs struggle to understand their business data, leading to:</p>
            <ul className="problem-list">
              <li>Guesswork-based decisions instead of data-driven strategies</li>
              <li>Slow, manual reporting processes</li>
              <li>Missed market trends and growth opportunities</li>
              <li>Inefficient resource allocation</li>
              <li>Lower profitability and competitiveness</li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="solution-box">
            <div className="box-icon icon-glow-blue" aria-hidden="true"><CheckCircle2 size={28} /></div>
            <h3>Our Solution: RevMind</h3>
            <p>An intelligent AI platform that empowers MSMEs with:</p>
            <ul className="solution-list">
              <li>Data-based decision making in seconds</li>
              <li>Automated, instant insights and alerts</li>
              <li>Predictive analytics to anticipate trends</li>
              <li>Optimized operations and resource management</li>
              <li>Sustainable business growth and profitability</li>
            </ul>
          </div>
        </div>

        <div className="significance">
          <h3>Why This Matters</h3>
          <p>RevMind bridges the gap between raw data and actionable intelligence, giving MSMEs the analytical power previously available only to large enterprises, but at an affordable price and with localized support.</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
