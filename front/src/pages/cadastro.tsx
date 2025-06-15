// src/pages/Cadastro.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

export default function CadastroPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuarioemail: email,
          usuariosenha: senha,
        }),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        navigate('/login');
      } else {
        const error = await response.json();
        alert(`Erro: ${error.message || 'Falha no cadastro.'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <>
      <div className="cadastro-top-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Clever_Systems_Logo.png"
          alt="Clever Systems"
        />
      </div>

      <header className="cadastro-header">
        <span className="cadastro-menu-label">CADASTRO</span>
        <button className="cadastro-logout-btn" onClick={() => navigate('/')}>
          SAIR
        </button>
      </header>

      <div className="cadastro-container">
        <div className="cadastro-form-section">
          <h2>Cadastro de Usuário</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
            <button type="submit" className="cadastro-btn">
              Cadastrar
            </button>
          </form>
        </div>
        <div className="cadastro-illustration">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/people-working-on-project-3562742-2985425.png"
            alt="Ilustração de pessoas trabalhando"
          />
        </div>
      </div>
    </>
  );
}
