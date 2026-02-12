import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import SmoothScroll from './components/visuals/SmoothScroll';
import NoiseOverlay from './components/visuals/NoiseOverlay';

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <NoiseOverlay />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </SmoothScroll>
  );
};

export default App;
