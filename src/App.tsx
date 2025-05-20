import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TripDetails from './components/TripDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TripDetails />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;