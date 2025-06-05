import React from 'react';
import './App.css';
import TipoeqCrud from './TipoeqCrud';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <a href="#">HOME</a>
          <a href="#">CLIENTES</a>
          <a href="#">EQUIPAMENTOS</a>
        </nav>
        <div className="profile">
          Rafael Marconi
          <button className="logout">SAIR</button>
        </div>
      </header>

      <main>
        <TipoeqCrud />
      </main>
    </>
  );
}

export default App;
