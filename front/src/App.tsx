import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';

// Importando apenas a página de Tipo de Instalação
import TipoInstalacao from './pages/tipoinstalacao';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />

      <main>
        <Routes>
          {/* Rota inicial redirecionando para Tipo de Instalação */}
          <Route path="/" element={<Navigate to="/tipoinstalacao" />} />
          <Route path="/tipoinstalacao" element={<TipoInstalacao />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
