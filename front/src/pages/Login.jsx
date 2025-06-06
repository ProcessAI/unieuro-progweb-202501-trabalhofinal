// src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './Login.css';

export default function Login() {
  const navigate = useNavigate(); // Inicializando a função de navegação

  return (
    <>
<header>
  <div className="logo">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Clever_Systems_Logo.png"
      alt="Clever Systems"
    />
  </div>
  <div className="header-right">
  <span className="menu-label">LOGIN</span>

  <div className="profile-container">
    <div className="profile-icon">
      <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
        alt="Perfil"
      />
    </div>
    <button className="logout-btn" onClick={() => window.location.href = '/'}>SAIR</button>
  </div>
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

          {/* BOTÃO DE CADASTRO FUNCIONAL */}
          <button
            className="btn"
            type="button"
            onClick={() => navigate('/cadastro')}
          >
            Cadastre-se
          </button>
        </form>
      </main>
    </>
  );
}
