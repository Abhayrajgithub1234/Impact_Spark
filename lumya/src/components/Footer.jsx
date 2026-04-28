const Footer = () => {
  return (
    <footer className="footer container">
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>LUMYA</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '300px', lineHeight: '1.6' }}>The leading AI-driven marketing platform that empowers businesses to create smarter campaigns.</p>
        <p style={{ color: 'var(--text-muted)', marginTop: '2.5rem', fontSize: '0.85rem' }}>© 2026 Lumya AI. All rights reserved.</p>
      </div>
      <div style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap' }}>
        <div>
          <h4 style={{ marginBottom: '1.25rem', fontSize: '1rem', color: 'var(--text-primary)' }}>Product</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="#features" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Features</a></li>
            <li><a href="#demo" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Demo</a></li>
            <li><a href="#financials" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Financials</a></li>
            <li><a href="#pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.25rem', fontSize: '1rem', color: 'var(--text-primary)' }}>Legal</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Privacy Policy</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Terms & Conditions</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Data Consent</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
