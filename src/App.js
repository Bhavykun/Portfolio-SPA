import React from "react";
import {  Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (

      <div>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </div>
  );
}

export default App;
