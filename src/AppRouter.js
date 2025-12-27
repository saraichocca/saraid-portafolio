
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import App from './App';
import PrimeraUnidad from './components/sections/PrimeraUnidad';
import SegundaUnidad from './components/sections/SegundaUnidad';



const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/primera-unidad" element={<PrimeraUnidad />} />
      <Route path="/segunda-unidad" element={<SegundaUnidad />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
