import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Zap, TrendingUp, Target, DollarSign } from 'lucide-react';

const Analytics = () => {
  // Time Savings Data
  const timeSavingsData = [
    { task: 'Manual Analysis', hours: 40 },
    { task: 'With RevMind', hours: 4 },
  ];

  // Revenue Impact Data
  const revenueData = [
    { month: 'Month 1', revenue: 100, revenueMind: 135 },
    { month: 'Month 2', revenue: 105, revenueMind: 152 },
    { month: 'Month 3', revenue: 110, revenueMind: 170 },
    { month: 'Month 4', revenue: 115, revenueMind: 189 },
    { month: 'Month 5', revenue: 120, revenueMind: 210 },
    { month: 'Month 6', revenue: 125, revenueMind: 235 },
  ];

  // Decision Accuracy Data
  const accuracyData = [
    { name: 'Traditional Methods', value: 65, fill: 'url(#colorTrad)' },
    { name: 'RevMind AI', value: 95, fill: 'url(#colorAI)' },
  ];

  // Productivity Metrics
  const productivityData = [
    { metric: 'Data Processing', traditional: 3, revmind: 98 },
    { metric: 'Insight Generation', traditional: 2, revmind: 96 },
    { metric: 'Report Automation', traditional: 15, revmind: 99 },
    { metric: 'Predictive Accuracy', traditional: 68, revmind: 94 },
  ];

  return (
    <section className="analytics-section">
      <div className="container">
        <h2 className="section-title">
          RevMind <span>Analytics Benefits</span>
        </h2>
        <p className="section-subtitle">
          See how RevMind's AI-powered platform transforms your business metrics
        </p>

        {/* Time Savings Chart */}
        <div className="chart-container">
          <div className="chart-card">
            <h3>Time Savings: Weekly Data Analysis</h3>
            <p className="chart-description">
              Reduce manual analysis time from 40 hours to just 4 hours per week
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={timeSavingsData}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#c2410c" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-strong)" vertical={false} />
                <XAxis dataKey="task" stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{fill: 'var(--surface-light)'}}
                  contentStyle={{
                    backgroundColor: 'var(--surface-strong)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: '12px',
                    color: 'var(--text)',
                    boxShadow: 'var(--shadow)'
                  }}
                  itemStyle={{ color: 'var(--text)' }}
                />
                <Bar dataKey="hours" fill="url(#colorHours)" radius={[8, 8, 0, 0]} maxBarSize={60} />
              </BarChart>
            </ResponsiveContainer>
            <div className="chart-stat">
              <span className="stat-value text-gradient-orange">90%</span>
              <span className="stat-label">Time Reduction</span>
            </div>
          </div>

          {/* Revenue Growth Chart */}
          <div className="chart-card">
            <h3>Revenue Growth Projection</h3>
            <p className="chart-description">
              Track revenue growth with RevMind AI insights over 6 months
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-strong)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--surface-strong)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: '12px',
                    color: 'var(--text)',
                    boxShadow: 'var(--shadow)'
                  }}
                  itemStyle={{ color: 'var(--text)' }}
                />
                <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                <Line
                  type="smooth"
                  dataKey="revenue"
                  stroke="#64748b"
                  strokeWidth={2}
                  dot={{ fill: '#64748b', r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                  name="Traditional Methods"
                />
                <Line
                  type="smooth"
                  dataKey="revenueMind"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 5, strokeWidth: 0 }}
                  activeDot={{ r: 8, stroke: '#60a5fa', strokeWidth: 2 }}
                  name="With RevMind"
                  filter="url(#glow)"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="chart-stat">
              <span className="stat-value text-gradient-blue">+88%</span>
              <span className="stat-label">6-Month Growth</span>
            </div>
          </div>
        </div>

        {/* Accuracy Comparison */}
        <div className="chart-container">
          <div className="chart-card wide">
            <h3>Decision Accuracy Improvement</h3>
            <p className="chart-description">
              RevMind AI achieves 95% accuracy compared to 65% with traditional methods
            </p>
            <div className="accuracy-comparison">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={accuracyData} barSize={80}>
                  <defs>
                    <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#991b1b" stopOpacity={0.3}/>
                    </linearGradient>
                    <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.9}/>
                      <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-strong)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} axisLine={false} tickLine={false} />
                  <YAxis stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} axisLine={false} tickLine={false} label={{ value: 'Accuracy %', angle: -90, position: 'insideLeft', fill: 'var(--text-muted)' }} />
                  <Tooltip
                    cursor={{fill: 'var(--surface-light)'}}
                    contentStyle={{
                      backgroundColor: 'var(--surface-strong)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--border-strong)',
                      borderRadius: '12px',
                      color: 'var(--text)',
                      boxShadow: 'var(--shadow)'
                    }}
                    itemStyle={{ color: 'var(--text)' }}
                    formatter={(value) => `${value}%`}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {accuracyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Productivity Metrics */}
        <div className="chart-container">
          <div className="chart-card wide">
            <h3>Productivity Metrics Comparison</h3>
            <p className="chart-description">
              RevMind outperforms traditional methods across all key metrics
            </p>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={productivityData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorTradHoriz" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.8}/>
                  </linearGradient>
                  <linearGradient id="colorAIHoriz" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.9}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-strong)" horizontal={false} />
                <XAxis type="number" stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} axisLine={false} tickLine={false} />
                <YAxis dataKey="metric" type="category" stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} width={150} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{fill: 'var(--surface-light)'}}
                  contentStyle={{
                    backgroundColor: 'var(--surface-strong)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: '12px',
                    color: 'var(--text)',
                    boxShadow: 'var(--shadow)'
                  }}
                  itemStyle={{ color: 'var(--text)' }}
                  formatter={(value) => `${value}%`}
                />
                <Legend iconType="circle" wrapperStyle={{paddingTop: '10px'}} />
                <Bar dataKey="traditional" fill="url(#colorTradHoriz)" name="Traditional Methods" radius={[0, 8, 8, 0]} barSize={20} />
                <Bar dataKey="revmind" fill="url(#colorAIHoriz)" name="RevMind AI" radius={[0, 8, 8, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Benefits Stats */}
        <div className="benefits-stats">
          <div className="stat-card">
            <div className="stat-icon icon-glow-orange"><Zap size={28} /></div>
            <div className="stat-content">
              <h4>10x Faster</h4>
              <p>Data processing and analysis speed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon icon-glow-blue"><TrendingUp size={28} /></div>
            <div className="stat-content">
              <h4>88% Growth</h4>
              <p>Revenue improvement within 6 months</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon icon-glow-cyan"><Target size={28} /></div>
            <div className="stat-content">
              <h4>95% Accuracy</h4>
              <p>AI-powered decision making</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon icon-glow-green"><DollarSign size={28} /></div>
            <div className="stat-content">
              <h4>90% Savings</h4>
              <p>Reduction in manual analysis time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
