/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Studies from './components/studies/Studies';
import Skills from './components/skills/Skills';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <About />
      <Studies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;