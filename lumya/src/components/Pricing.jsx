import { Check } from 'lucide-react';

const plans = [
  { name: 'Free', price: '₹0', features: ['50 images/month', 'Basic PersonaGen', 'Community Support'] },
  { name: 'Pro', price: '₹499', features: ['150 images/month', 'Advanced PersonaGen', 'CopyCrafter Access', 'Email Support'] },
  { name: 'Business', price: '₹999', features: ['500 images/month', 'Full Platform Access', 'SmartBudgetor', 'Priority Support'], popular: true },
  { name: 'Enterprise', price: '₹1,999', features: ['Unlimited images', 'Custom AI Models', 'Dedicated Account Manager', '24/7 Phone Support'] }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section container">
      <div className="section-header">
        <span className="section-badge">Simple Pricing</span>
        <h2 className="section-title">Plans that scale with you</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
        {plans.map((plan, i) => (
          <div key={i} className="glass-panel" style={{ padding: '3rem 2rem', position: 'relative', overflow: 'hidden', border: plan.popular ? '1px solid var(--accent-primary)' : '1px solid var(--panel-border)' }}>
            {plan.popular && <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--accent-primary)', color: 'white', padding: '0.4rem 1.5rem', fontSize: '0.75rem', fontWeight: '600', borderBottomLeftRadius: '0.75rem' }}>MOST POPULAR</div>}
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{plan.name}</h3>
            <div style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '2.5rem', color: 'var(--text-primary)' }}>{plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>/mo</span></div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {plan.features.map((feature, j) => (
                <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <Check size={18} color="var(--text-primary)" /> {feature}
                </li>
              ))}
            </ul>
            <button className={plan.popular ? "btn btn-primary" : "btn btn-secondary"} style={{ width: '100%' }}>Choose {plan.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
