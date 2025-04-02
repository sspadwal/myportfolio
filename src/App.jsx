import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import MyWork from './components/MyWork/MyWork';
import Navbar from './components/Navbar/Navbar';
import ParticleBackground from './components/ParticleCanvas/ParticleBackground';
import './index.css';

function App() {
  return (
    <div className="app">

      <ParticleBackground />
      <div className="content">
        <Navbar />
        <Hero />
        <About />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;