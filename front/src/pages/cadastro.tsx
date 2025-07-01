// src/pages/Cadastro.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastro.css';

const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('https://laudinho.cleversystems.net/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuarioemail: email, usuariosenha: senha }),
      });

      if (response.ok) {
        await response.json();
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
      <header className="bg-yellow-400 px-6 py-4 flex items-center justify-start relative shadow-md sticky top-0 z-50">
  <img
    src="https://cleversystems.com.br/wp-content/uploads/2021/01/site_logo.png"
    alt="Clever Systems"
    className="h-8"
  />
  <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold text-black leading-none">
  Crie sua conta!
</h1>
</header>




      <main className="cadastro-main">
        <div className="cadastro-box">
          <h2 className="cadastro-box-title">Crie sua conta</h2>

          <form className="cadastro-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="cadastro-senha-container">
              <input
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <button className="cadastro-btn" type="submit">Cadastrar</button>

            <div className="cadastro-links">
              Já tem uma conta? <a onClick={() => navigate('/login')}>Faça login</a>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Cadastro;
