import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

export default function CadastroPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
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
        <img className="cadastro-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCM_0OvsIpEJaDrUEu1SQWkj4wIoPw1xMevQ&s" alt="Clever Systems" />
        <span className="cadastro-menu-label">Cadastro</span>
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
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️"}
              </button>
            </div>
            <button type="submit" className="cadastro-btn">
              Cadastrar
            </button>
          </form>
          <p className="cadastro-login-link">
            <span className="cadastro-account-text">Já tem uma conta? </span>
            <span className="cadastro-login-action" onClick={() => navigate('/login')}>Faça login</span>
          </p>
        </div>
      </div>
    </>
  );
}
