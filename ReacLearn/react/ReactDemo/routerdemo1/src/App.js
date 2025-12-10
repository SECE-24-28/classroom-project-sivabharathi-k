import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <BrowserRouter>
    <h1>Hi iam from app</h1>
            <Routes>
              <Route path="/Home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
