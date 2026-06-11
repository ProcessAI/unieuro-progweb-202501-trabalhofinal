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

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cadastro" />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/clientes" element={<ProtectedRoute><ClientesPage /></ProtectedRoute>} />
      <Route path="/equipamentos" element={<ProtectedRoute><Equipamentos /></ProtectedRoute>} />
      <Route path="/tipoeq" element={<ProtectedRoute><TipoeqCrud/></ProtectedRoute>} />
      <Route path="/laudo" element={<ProtectedRoute><Laudos/></ProtectedRoute>} />
      <Route path="/tipolaudo" element={<ProtectedRoute><TipoLaudo /></ProtectedRoute>} />
      <Route path="/tipoinstalacao" element={<ProtectedRoute><TipoInstalacao /></ProtectedRoute>} />
    </Routes>
  );
}

export default App


