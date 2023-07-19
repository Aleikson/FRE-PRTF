import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home'
import Case from './components/case/Case';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
        <NavBar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/case' element={<Case/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;