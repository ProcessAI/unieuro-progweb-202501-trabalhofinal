// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

// IMPORTAR OS NOVOS COMPONENTES SVG AQUI
import EyeOpenIcon from '../components/EyeOpenIcon'; // Ajuste o caminho se a pasta 'icons' estiver em outro lugar
import EyeClosedIcon from '../components/EyeClosedIcon'; // Ajuste o caminho

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('https://laudinho.cleversystems.net/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuarioemail: email, usuariosenha: senha }),
      });

      if (response.ok) {
        await response.json();
        alert('Login realizado com sucesso!');
        navigate('/clientes');
      } else {
        const error = await response.json();
        alert(`Erro: ${error.message || 'Falha no login.'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <>
      <header className="login-header">
        <div className="login-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCM_0OvsIpEJaDrUEu1SQWkj4wIoPw1xMevQ&s"
            alt="Clever Systems"
          />
        </div>
        <div className="login-title-header">Seja Bem-vindo!</div>
      </header>

      <main className="login-main">
        <div className="login-box">
          <h2 className="login-box-title">Login</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="login-senha-container">
              <input
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <button className="login-btn" type="submit">Entrar</button>
            <button
              className="login-btn"
              type="button"
              onClick={() => navigate('/cadastro')}
            >
              Cadastre-se
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;