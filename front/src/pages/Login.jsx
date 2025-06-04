import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login realizado:\nEmail: ${form.email}\nSenha: ${form.senha}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Barra Superior */}
      <header className="bg-yellow-400 h-[65px] flex items-center px-6 relative shadow-md">
        <div className="logo w-12 h-12 bg-white rounded-full absolute left-6" />
        <h1 className="flex-1 text-center font-bold text-black text-2xl">LOGIN</h1>
      </header>

      {/* Conteúdo do Login */}
      <main className="flex-grow flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-center font-bold text-xl mb-6">Bem-vindo de volta!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={form.email}
              onChange={handleChange("email")}
              required
              className="border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              value={form.senha}
              onChange={handleChange("senha")}
              required
              className="border rounded px-3 py-2"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded px-4 py-2 font-bold"
            >
              Entrar
            </button>
          </form>

          <div className="mt-4 flex flex-col items-center gap-3 text-sm text-gray-600">
            <a href="/esqueci-senha" className="text-yellow-400 hover:underline">
              Esqueci a senha
            </a>
            <p>
              Não tem uma conta?{" "}
              <a href="/cadastro" className="text-yellow-400 hover:underline">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
