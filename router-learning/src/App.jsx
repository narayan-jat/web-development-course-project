// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Components/About.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import './index.css'; // Import the CSS file
import Feature from './Components/Feature.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="navbar-link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-link">Contact</Link>
            </li>
            <li>
              <Link to="/feature" className="navbar-link">Feature</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feature" element={<Feature />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;