import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BandMembers from './components/BandMembers';
import EventSection from './components/EventSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <Router>
      {/* Ensure BackgroundParticles is the first rendered component */}
      <BackgroundParticles />
      <Navbar />
      <HeroSection />
      <BandMembers />
      <EventSection />
      <ContactForm />
      <Footer />
    </Router>
  );
}

export default App;
