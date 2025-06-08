import Navbar from './Navbar.jsx';
import Movielist from './Movielist.jsx'
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import News from './News.jsx';

  

function App() {
  const [search, setSearch] = useState('all');

  return (
      <Router>
      <Navbar onSearchChange={setSearch} />

      <Routes>
        
        <Route path="/" element={<Movielist search={search} setSearch={setSearch} />} />

        <Route path="/contact" element={<Contact />} /> 
        <Route path="/news" element={<News />} />


      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
