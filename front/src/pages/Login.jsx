// src/pages/Login.jsx
import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Clever_Systems_Logo.png" alt="Clever Systems" />
        </div>
        <div className="header-right">
          <span className="menu-label">LOGIN</span>
          <button className="logout-btn">SAIR</button>
        </div>
      </header>

      <main>
        <h1>LAUDINHO</h1>
        <form>
          <input type="text" placeholder="CPF" />
          <div className="senha-container">
            <input type="password" placeholder="Senha" />
            <button type="button" className="toggle-senha">👁️</button>
          </div>
          <div className="links">
            Esqueceu a senha? <a href="#">Clique aqui!</a>
          </div>
          <button className="btn" type="submit">Entrar</button>
          <button className="btn" type="button">Cadastre-se</button>
        </form>
      </main>
    </>
  );
}
