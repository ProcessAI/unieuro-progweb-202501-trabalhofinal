import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Cadastro from './pages/Cadastro';
import TipoeqCrud from './pages/TipoeqCrud';
import Laudos from "./pages/laudos";
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />

      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <a href="/tipoeq">tipo de equipamentos</a>
          <a href="/clientes">CLIENTES</a>
          <a href="/login">LOGIN</a>
        </nav>
        <div className="profile">
          Rafael Marconi
          <button className="logout">SAIR</button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/tipoeq" />} />
          <Route path="/tipoeq" element={<TipoeqCrud />} />
          <Route path="/laudos" element={<Laudos />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
