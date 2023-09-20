/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import Studies from './components/studies/Studies';
import Skills from './components/skills/Skills'
import About from './components/about/About';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';

    const handleScroll = (event) => {
      const deltaY = event.deltaY;
      if (deltaY > 0) {
        scrollToNextSection();
      } else if (deltaY < 0) {
        scrollToPreviousSection();
      }
    };
    
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  };

  const scrollToNextSection = () => {
    const currentScroll = window.scrollY;
    const sections = document.querySelectorAll('.scrollable-section');

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;

      if (sectionTop > currentScroll) {
        scrollToSection(section.id);
        break;
      }
    }
  };

  const scrollToPreviousSection = () => {
    const currentScroll = window.scrollY;
    const sections = document.querySelectorAll('.scrollable-section');

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const sectionTop = section.offsetTop;

      if (sectionTop < currentScroll) {
        scrollToSection(section.id);
        break;
      }
    }
  };

  return (
    <div className="App">
      <ul className="dot-indicators">
        <li className="dot" onClick={() => scrollToSection('home')}></li>
        <li className="dot" onClick={() => scrollToSection('skills')}></li>
        <li className="dot" onClick={() => scrollToSection('studies')}></li>
        <li className="dot" onClick={() => scrollToSection('contact')}></li>
      </ul>
      <NavBar />
      <div id="home" className="scrollable-section">
        <Home />
        <Skills />
      </div>
      <div id="About" className="scrollable-section">
        <About />
      </div>
      <div id="studies" className="scrollable-section">
        <Studies />
      </div>
      <div id="footer" className="scrollable-section">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;