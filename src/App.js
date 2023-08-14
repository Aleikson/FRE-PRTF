import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home'
import Capabilities from './components/capabilities/Capabilities'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import Studies from './components/studies/Studies';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Studies />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;