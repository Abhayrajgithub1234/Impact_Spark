import React from 'react';
import { Brain, Settings, ShieldCheck, Box, Activity, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Brain size={28} />,
      title: 'Predictive Analytics',
      significance: 'Move from reacting to forecasting. Predict customer demand, market trends, and business outcomes before they happen.',
      details: 'Anticipate future patterns in your business data to make proactive decisions rather than reactive ones.'
    },
    {
      id: 2,
      icon: <Settings size={28} />,
      title: 'Process Automation',
      significance: 'Eliminate manual, repetitive tasks. Free up your team to focus on strategy and growth instead of data entry.',
      details: 'Automate routine business processes, reducing errors and saving countless hours of manual work.'
    },
    {
      id: 3,
      icon: <ShieldCheck size={28} />,
      title: 'Quality Control & Predictive Maintenance',
      significance: 'Prevent costly failures before they occur. Reduce downtime and maintain consistent product quality.',
      details: 'Identify potential equipment failures and quality issues early, avoiding expensive disruptions.'
    },
    {
      id: 4,
      icon: <Box size={28} />,
      title: 'Supply Chain Optimization',
      significance: 'Streamline inventory management and logistics. Minimize waste, reduce costs, and ensure product availability.',
      details: 'Optimize inventory levels, reduce stockouts, and improve supplier performance through intelligent insights.'
    },
    {
      id: 5,
      icon: <Activity size={28} />,
      title: 'Affordable & Scalable Tools',
      significance: 'Enterprise-grade AI intelligence at MSME prices. Grow without expensive, complex implementations.',
      details: 'Start small and scale as your business grows, without breaking the bank or requiring IT expertise.'
    },
    {
      id: 6,
      icon: <Globe size={28} />,
      title: 'Localized Intelligence',
      significance: 'AI designed for Indian business context. Get insights in local languages with support in Indian business hours.',
      details: 'Customized for MSMEs with WhatsApp support, local payment options, and contextual recommendations.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Powerful Features Built for Your Success</h2>
        <p className="section-subtitle">Each feature is designed to address specific business challenges and unlock new growth opportunities</p>
        
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="significance-text"><strong>Why It Matters:</strong> {feature.significance}</p>
              <p className="details-text">{feature.details}</p>
            </div>
          ))}
        </div>

        <div className="features-insight">
          <h3>How These Features Work Together</h3>
          <p>These six core features create an integrated ecosystem that transforms how your business operates. Predictive Analytics guides your strategy, Process Automation executes it efficiently, Quality Control ensures excellence, Supply Chain Optimization reduces costs, Affordable Scalability makes it accessible, and Localized Intelligence ensures it's tailored to your needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
