// src/App.tsx
//import React from 'react';
//import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import ClientesPage from './pages/ClientesPage';
import Equipamentos from './pages/Equipamentos';
import CadastroPage from './pages/cadastro'; // com "C" maiúsculo (match com o export)
import LoginPage from './pages/login'; // caso exista
import TipoeqCrud from './pages/TipoeqCrud';
import Laudos from './pages/laudos';
import TipoLaudo from './pages/tipo-laudo';
import TipoInstalacao from './pages/tipoinstalacao';



import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cadastro" />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/clientes" element={<ClientesPage />} />
      <Route path="/equipamentos" element={<Equipamentos />} />
      <Route path="/tipoeq" element={<TipoeqCrud/>} />
      <Route path="/laudo" element={<Laudos/>} />
      <Route path="/tipolaudo" element={<TipoLaudo />} />
      <Route path="/tipoinstalacao" element={<TipoInstalacao />} />
    </Routes>
  );
}

export default App


