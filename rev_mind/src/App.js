import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Analytics from './components/Analytics';
import VisionMission from './components/VisionMission';
import Workflow from './components/Workflow';
import Uniqueness from './components/Uniqueness';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`App ${theme}-theme`}>
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <ProblemSolution />
      <Features />
      <Benefits />
      <Analytics />
      <VisionMission />
      <Workflow />
      <Uniqueness />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
