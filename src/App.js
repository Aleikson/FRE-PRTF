import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home'
import CaseObject from './components/case/CaseObject';
import Capabilities from './components/capabilities/Capabilities'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <CaseObject />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;