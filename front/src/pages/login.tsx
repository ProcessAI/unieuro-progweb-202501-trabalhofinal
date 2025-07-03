// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
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
      <header className="bg-yellow-400 px-6 py-4 flex items-center justify-start relative shadow-md sticky top-0 z-50">
  <img
    src="https://cleversystems.com.br/wp-content/uploads/2021/01/site_logo.png"
    alt="Clever Systems"
    className="h-8"
  />
  <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold text-black leading-none">
  Seja Bem-Vindo
</h1>
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
        </div>
      </main>
    </>
  );
};

export default Login;
