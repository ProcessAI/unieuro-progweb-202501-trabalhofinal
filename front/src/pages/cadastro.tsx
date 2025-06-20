// src/pages/Cadastro.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

const Cadastro: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // lógica de envio do formulário aqui
  };

  return (
    <>
      <div className="top-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Clever_Systems_Logo.png"
          alt="Clever Systems"
        />
      </div>

      <header>
        <span className="menu-label">CADASTRO</span>
        <button className="logout-btn" onClick={() => navigate('/')}>SAIR</button>
      </header>

      <div className="container">
        <div className="form-section">
          <h2>Dados Pessoais</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome Completo" required />
            <input type="date" placeholder="Data de Nascimento" required />
            <input type="text" placeholder="CPF" required />
            <input type="text" placeholder="Telefone Celular" required />
            <input type="email" placeholder="E-mail" required />
            <button type="submit" className="btn">Cadastrar</button>
          </form>
        </div>
        <div className="illustration">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/people-working-on-project-3562742-2985425.png"
            alt="Ilustração de pessoas trabalhando"
          />
        </div>
      </div>
    </>
  );
};

export default Cadastro;
