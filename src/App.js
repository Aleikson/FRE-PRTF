import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CaseObject from './components/case/CaseObject';
import Capabilities from './components/capabilities/Capabilities'

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
        <NavBar />
    <Routes>
        <Route path='/' element={<Home />} />   
    </Routes>
    <CaseObject />
    <Capabilities />
    </div>
    </BrowserRouter>
  );
}

export default App;