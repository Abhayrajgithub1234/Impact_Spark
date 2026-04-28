import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Financials from './components/Financials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Financials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
