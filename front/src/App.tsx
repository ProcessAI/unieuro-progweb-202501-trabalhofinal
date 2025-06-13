import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';

// Importe sua página
import TipoLaudo from './pages/tipo-laudo';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/tipolaudo" />} />
          <Route path="/tipolaudo" element={<TipoLaudo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
