// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cats from './pages/Cats';
import CatDetail from './pages/CatDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cats" >
          <Route index element={<Cats />} />
          <Route path=":id" element={<CatDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
