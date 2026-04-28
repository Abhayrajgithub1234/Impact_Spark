import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Month 1', users: 50, revenue: 0.5 },
  { name: 'Month 2', users: 150, revenue: 1.5 },
  { name: 'Month 3', users: 250, revenue: 2.5 },
  { name: 'Month 4', users: 350, revenue: 3.5 },
  { name: 'Month 5', users: 450, revenue: 4.5 },
  { name: 'Month 6', users: 500, revenue: 5.0 },
];

const Financials = () => {
  return (
    <section id="financials" className="section container">
      <div className="section-header">
        <span className="section-badge">Business Projection</span>
        <h2 className="section-title">ROI & Break-Even Analysis</h2>
      </div>
      <div className="financials-grid">
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <h3 style={{ marginBottom: '2.5rem', fontSize: '1.25rem', fontWeight: '500' }}>Revenue Projection (Lakhs INR)</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--panel-border)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip 
                  cursor={{ fill: 'var(--panel-bg-hover)' }}
                  contentStyle={{ background: 'var(--bg-primary)', border: '1px solid var(--panel-border)', borderRadius: '0.5rem', color: 'var(--text-primary)', padding: '1rem' }}
                />
                <Bar dataKey="revenue" fill="var(--accent-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">₹20L</div>
            <div className="stat-label">Setup Cost</div>
          </div>
          <div className="stat-card">
            <div className="stat-value text-accent">₹60L</div>
            <div className="stat-label">Est. Annual Revenue</div>
          </div>
          <div className="stat-card" style={{ gridColumn: '1 / -1' }}>
            <div className="stat-value" style={{ color: 'var(--text-primary)' }}>6 Months</div>
            <div className="stat-label">Estimated Break-Even Point</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financials;
