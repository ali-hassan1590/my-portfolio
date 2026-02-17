import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience'; // Use the previous fixed version
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <footer style={{ padding: '4rem 10%', textAlign: 'center', opacity: 0.6 }}>
        <p className="mono">ALI HASSAN // 2026 // Built with React & Motion</p>
      </footer>
    </div>
  );
}

export default App;