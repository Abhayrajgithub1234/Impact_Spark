import { motion } from 'framer-motion';
import { ArrowRight, Bot, Target, Image as ImageIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero container">
      <motion.div 
        className="hero-badge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SparkleIcon />
        <span>The Future of AI Marketing is Here</span>
      </motion.div>
      
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Automate & Personalize <br />
        <span className="text-accent">Every Customer Interaction</span>
      </motion.h1>
      
      <motion.p 
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Lumya is an AI-powered marketing platform that integrates multiple tools to provide a full-stack solution for ad copywriting, campaign targeting, user profiling, budgeting, and AI image generation.
      </motion.p>
      
      <motion.div 
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
          Start Free Trial <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
        </button>
        <button className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
          Watch Demo
        </button>
      </motion.div>

      <motion.div 
        className="hero-dashboard-preview"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="dashboard-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem', height: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem', border: '1px solid var(--panel-border)', borderRadius: '0.75rem', background: 'var(--bg-secondary)' }}>
              <div style={{ height: '32px', background: '#3f3f46', borderRadius: '0.5rem' }}></div>
              <div style={{ height: '16px', width: '70%', background: '#27272a', borderRadius: '0.25rem' }}></div>
              <div style={{ height: '16px', width: '50%', background: '#27272a', borderRadius: '0.25rem' }}></div>
            </div>
            <div style={{ padding: '1.5rem', height: '160px', border: '1px solid var(--panel-border)', borderRadius: '0.75rem', background: 'var(--bg-secondary)' }}>
               <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Campaign Metrics</h4>
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', height: '70px' }}>
                  <div style={{ flex: 1, background: '#3f3f46', height: '40%', borderRadius: '4px' }}></div>
                  <div style={{ flex: 1, background: '#3f3f46', height: '70%', borderRadius: '4px' }}></div>
                  <div style={{ flex: 1, background: 'var(--accent-primary)', height: '100%', borderRadius: '4px' }}></div>
               </div>
            </div>
          </div>
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem', border: '1px solid var(--panel-border)', borderRadius: '0.75rem', background: 'var(--bg-secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Active Campaign: <span className="text-accent" style={{ fontWeight: '600' }}>Summer Launch</span></h3>
              <div style={{ background: 'var(--accent-muted)', color: 'var(--accent-primary)', padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '600' }}>ACTIVE</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              <div style={{ background: '#18181b', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--accent-muted)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Bot color="var(--accent-primary)" size={24} />
                </div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>CopyCrafter</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Generated 14 ad variants</p>
              </div>
              <div style={{ background: '#18181b', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--accent-muted)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Target color="var(--accent-primary)" size={24} />
                </div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>PersonaGen</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Targeting: Fitness Enthusiasts</p>
              </div>
              <div style={{ background: '#18181b', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--accent-muted)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <ImageIcon color="var(--accent-primary)" size={24} />
                </div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>AI Images</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Generated 4 creatives</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" />
  </svg>
);

export default Hero;
