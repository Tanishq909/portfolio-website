import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (  //React Fragment
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
