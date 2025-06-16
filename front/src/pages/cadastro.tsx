
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

export default function CadastroPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
      <header className="cadastro-header">
        <img className="cadastro-logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Clever_Systems_Logo.png" alt="Logo da Empresa" />
        <span className="cadastro-menu-label">CADASTRO</span>
      </header>

      <div className="cadastro-container">
        <div className="cadastro-form-box">
          <h2 className="cadastro-title">Crie sua conta</h2>
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
            <button type="submit" className="cadastro-btn">
              Cadastrar
            </button>
          </form>
          <p className="cadastro-login-link">
            Já tem uma conta? <span onClick={() => navigate('/login')}>Faça login</span>
          </p>
        </div>
      </div>
    </>
  );
}
