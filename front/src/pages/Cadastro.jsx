// src/pages/Cadastro.jsx
import React from 'react';
import './Cadastro.css';

export default function Cadastro() {
  return (
    <>
      <div className="top-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Clever_Systems_Logo.png" alt="Clever Systems" />
      </div>

      <header>
        <span className="menu-label">CADASTRO</span>
        <button className="logout-btn">SAIR</button>
      </header>

      <div className="container">
        <div className="form-section">
          <h2>Dados Pessoais</h2>
          <form>
            <input type="text" placeholder="Nome Completo" required />
            <input type="date" placeholder="Data de Nascimento" required />
            <input type="text" placeholder="CPF" required />
            <input type="text" placeholder="Telefone Celular" required />
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="CPF" required />
            <input type="text" placeholder="Telefone Celular" required />
            <input type="email" placeholder="E-mail" required />
            <button type="submit" className="btn">cadastrar</button>
          </form>
        </div>
        <div className="illustration">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/people-working-on-project-3562742-2985425.png" alt="Ilustração de pessoas trabalhando" />
        </div>
      </div>
    </>
  );
}
