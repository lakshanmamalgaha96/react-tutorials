import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';

function App() {

  return (
    <div>


      <BrowserRouter>

        <Link to={'/'}>Home</Link>
        <br />
        <Link to={'/about'}>About us</Link>
        <br />
        <Link to={'/contact'}>Contact</Link>

        <div style={{ padding: 2, border: '2px solid red', margin: 2 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
