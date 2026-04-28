import React from 'react';
import { Lightbulb, DollarSign, Clock, Factory, Trophy, BarChart2 } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Lightbulb size={28} />,
      title: 'Improved Decision-Making',
      description: 'Replace guesswork with data-backed strategies. Make confident decisions that align with market realities and business goals.'
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Increased Revenue & Profit',
      description: 'Identify new revenue opportunities, optimize pricing, reduce waste, and improve margins through intelligent insights.'
    },
    {
      icon: <Clock size={28} />,
      title: 'Time & Resource Management',
      description: 'Automate routine tasks, reduce manual work, and allocate resources more effectively. Get more done with less effort.'
    },
    {
      icon: <Factory size={28} />,
      title: 'Better Production & Inventory Management',
      description: 'Optimize production schedules, reduce stockouts, minimize excess inventory, and improve overall operational efficiency.'
    },
    {
      icon: <Trophy size={28} />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors by making smarter, faster decisions with data-driven insights and predictive intelligence.'
    },
    {
      icon: <BarChart2 size={28} />,
      title: 'Scalable Growth',
      description: 'Build a foundation for sustainable growth. Scale your operations confidently with insights that guide every step.'
    }
  ];

  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <h2 className="section-title">Real Business Impact</h2>
        <p className="section-subtitle">Tangible benefits that transform how MSMEs operate and grow</p>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-comparison">
          <h3>The Difference RevMind Makes</h3>
          <div className="comparison-grid">
            <div className="comparison-item">
              <h4>Without RevMind</h4>
              <ul>
                <li>Guesswork & intuition</li>
                <li>Slow, manual reports</li>
                <li>Missed market trends</li>
                <li>Inefficient resource use</li>
              </ul>
            </div>
            <div className="comparison-item">
              <h4>With RevMind</h4>
              <ul>
                <li>Data-based decisions</li>
                <li>Instant, automated insights</li>
                <li>Predict future trends</li>
                <li>Optimized operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
