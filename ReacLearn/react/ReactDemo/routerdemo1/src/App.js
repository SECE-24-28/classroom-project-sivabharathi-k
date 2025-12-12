import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import Books from './Books';
import Invoices from './Invoices';
import Invoice from './Invoice';


function App() {
  
  return (

    <BrowserRouter>
    <h1>Hi iam from app</h1>
    
    <ul>
      <Link to="/Home"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/Users/1"><li>Users 1</li></Link>
      <Link to="/Users/2"><li>Users 2</li></Link>
      <Link to="/book/newbook"><li>new books</li></Link>
      <Link to="/book/oldbook"><li>old books</li></Link>

      <Link to="/Invoices"><li>Invoices</li></Link> 
      

    </ul>
            <Routes>
              <Route path="/Home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/users/:id" element={<Users/>}/>

                <Route path="/book">
                  <Route path="newbook" element={<Books/>}></Route>
                  <Route path="oldbook" element={<Books/>}></Route>
                </Route>

                <Route path="/Invoices" element={<Invoices/>}/>
                <Route path="/invoice/:id" element={<Invoice/>}/>

                


            </Routes>
        </BrowserRouter>
  );
}

export default App;
