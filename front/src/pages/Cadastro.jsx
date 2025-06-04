import React, { useState } from "react";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cadastro realizado:\nNome: ${form.nome}\nCPF: ${form.cpf}\nEmail: ${form.email}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Barra Superior */}
      <header className="bg-yellow-400 h-[65px] flex items-center px-6 relative shadow-md">
        <div className="logo w-12 h-12 bg-white rounded-full absolute left-6" />
        <h1 className="flex-1 text-center font-bold text-black text-2xl">CADASTRO</h1>
      </header>

      {/* Conteúdo do Cadastro */}
      <main className="flex-grow flex justify-center items-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-center font-bold text-xl mb-6">Crie sua conta</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Nome completo"
              value={form.nome}
              onChange={handleChange("nome")}
              required
              className="border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="CPF"
              value={form.cpf}
              onChange={handleChange("cpf")}
              required
              className="border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange("email")}
              required
              className="border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange("senha")}
              required
              className="border rounded px-3 py-2"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded px-4 py-2 font-bold"
            >
              Cadastrar
            </button>
          </form>

          <div className="mt-4 flex flex-col items-center gap-3 text-sm text-gray-600">
            <p>
              Já tem uma conta?{" "}
              <a href="/login" className="text-yellow-400 hover:underline">
                Faça login
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
