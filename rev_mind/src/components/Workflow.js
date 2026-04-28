import React from 'react';
import { Database, Cpu, Lightbulb, ArrowRight, ArrowDown } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      num: '1',
      title: 'User Login',
      description: 'Secure access to your personalized analytics dashboard'
    },
    {
      num: '2',
      title: 'Data Upload',
      description: 'Multiple options: CSV/Excel, API integration, or database connection'
    },
    {
      num: '3',
      title: 'Data Processing',
      description: 'Automatic cleaning, validation, and preparation for analysis'
    },
    {
      num: '4',
      title: 'AI Analysis',
      description: 'Analyze current data, predict trends, and detect anomalies'
    },
    {
      num: '5',
      title: 'Smart Alerts',
      description: 'Instant notifications when anomalies or opportunities are detected'
    },
    {
      num: '6',
      title: 'Visual Reports',
      description: 'Beautiful, actionable dashboards and downloadable reports'
    }
  ];

  return (
    <section className="workflow" id="workflow">
      <div className="container">
        <h2 className="section-title">How RevMind Works</h2>
        <p className="section-subtitle">A simple, intelligent workflow that turns your data into decisions</p>
        
        <div className="workflow-container">
          <div className="workflow-steps">
            {steps.map((step, index) => (
              <div key={step.num} className="workflow-step">
                <div className="step-number">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < steps.length - 1 && <div className="step-arrow" aria-hidden="true">Next</div>}
              </div>
            ))}
          </div>

          <div className="workflow-visual">
            <div className="workflow-diagram premium-flowchart">
              <div className="flow-node">
                <div className="node-icon icon-glow-orange">
                  <Database size={32} />
                </div>
                <span className="flow-label">Raw Data</span>
              </div>
              
              <div className="flow-connector horizontal">
                <ArrowRight size={24} className="connector-icon" />
                <div className="connector-line"></div>
              </div>

              <div className="flow-node">
                <div className="node-icon icon-glow-blue pulse-anim">
                  <Cpu size={32} />
                </div>
                <span className="flow-label">AI Engine</span>
              </div>

              <div className="flow-connector horizontal">
                <ArrowRight size={24} className="connector-icon" />
                <div className="connector-line"></div>
              </div>

              <div className="flow-node">
                <div className="node-icon icon-glow-green">
                  <Lightbulb size={32} />
                </div>
                <span className="flow-label">Insights</span>
              </div>
            </div>
          </div>
        </div>

        <div className="workflow-benefits">
          <h3>Why This Workflow Matters</h3>
          <ul>
            <li><strong>Fully Automated:</strong> No manual intervention needed. Let AI do the heavy lifting.</li>
            <li><strong>Fast Turnaround:</strong> From raw data to actionable insights in minutes, not weeks.</li>
            <li><strong>Continuous Learning:</strong> The system improves with more data and usage over time.</li>
            <li><strong>Real-Time Alerts:</strong> Get notified instantly when something important happens.</li>
            <li><strong>Easy Reporting:</strong> Beautiful visualizations that everyone can understand.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
