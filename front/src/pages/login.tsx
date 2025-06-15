// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
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
        const data = await response.json();
        alert('Login realizado com sucesso!');

        // Exemplo: salvar token (se houver)
        // localStorage.setItem('token', data.token);

        navigate('/clientes'); // Redireciona para a página protegida
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
            src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Clever_Systems_Logo.png"
            alt="Clever Systems"
          />
        </div>
        <div className="login-header-right">
          <span className="login-menu-label">LOGIN</span>

          <div className="login-profile-container">
            <div className="login-profile-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="Perfil"
              />
            </div>
            <button className="login-logout-btn" onClick={() => window.location.href = '/'}>
              SAIR
            </button>
          </div>
        </div>
      </header>

      <main className="login-main">
        <h1>LAUDINHO</h1>
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
            <button
              type="button"
              className="login-toggle-senha"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              👁️
            </button>
          </div>
          <div className="login-links">
            Esqueceu a senha? <a href="#">Clique aqui!</a>
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
      </main>
    </>
  );
};

export default Login;
