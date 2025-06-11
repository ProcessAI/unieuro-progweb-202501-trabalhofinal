// src/App.tsx
import React, { useState } from "react";
import "./index.css";

interface Laudo {
  id: number;
  descricao: string;
  tipoLaudo: string;
  tipoInstalacao: string;
  status: string;
  osClickup: string;
  conteudo: string;
  preview: string;
  dataInclusao: string;
  dataFechamento: string;
}

export default function App() {
  const [laudos, setLaudos] = useState<Laudo[]>([
    {
      id: 1,
      descricao: "Vistoria geral da instalação A",
      tipoLaudo: "Elétrico",
      tipoInstalacao: "Industrial",
      status: "Em andamento",
      osClickup: "OS12345",
      conteudo: "🔧 Revisar cabos, terminais e disjuntores.",
      preview: "Revisar cabos, terminais e disjuntores.",
      dataInclusao: "2025-06-09T10:30",
      dataFechamento: "",
    },
    {
      id: 2,
      descricao: "Inspeção de segurança predial",
      tipoLaudo: "Segurança",
      tipoInstalacao: "Residencial",
      status: "Concluído",
      osClickup: "OS67890",
      conteudo: "🛠️ Verificar para-raios e extintores.",
      preview: "Verificar para-raios e extintores.",
      dataInclusao: "2025-06-08T22:45",
      dataFechamento: "2025-06-08T23:30",
    },
  ]);

  const [busca, setBusca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLaudo, setEditingLaudo] = useState<Laudo | null>(null);
  const [viewLaudo, setViewLaudo] = useState<Laudo | null>(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [laudoToDelete, setLaudoToDelete] = useState<number | null>(null);

  const emptyForm: Omit<Laudo, "id"> = {
    descricao: "",
    tipoLaudo: "",
    tipoInstalacao: "",
    status: "",
    osClickup: "",
    conteudo: "",
    preview: "",
    dataInclusao: "",
    dataFechamento: "",
  };

  const [form, setForm] = useState<Omit<Laudo, "id">>(emptyForm);

  const resetForm = () => setForm(emptyForm);

  const openNovoLaudo = () => {
    setEditingLaudo(null);
    resetForm();
    setModalOpen(true);
  };

  const openEditarLaudo = (laudo: Laudo) => {
    setEditingLaudo(laudo);
    const { id, ...rest } = laudo;
    setForm(rest);
    setModalOpen(true);
  };

  const openVisualizarLaudo = (laudo: Laudo) => {
    setViewLaudo(laudo);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "conteudo" && { preview: value }),
    }));
  };

  const handleSubmit = () => {
    if (editingLaudo) {
      setLaudos((prev) =>
        prev.map((l) => (l.id === editingLaudo.id ? { ...l, ...form } : l))
      );
    } else {
      setLaudos((prev) => [...prev, { id: Date.now(), ...form }]);
    }
    setModalOpen(false);
    setEditingLaudo(null);
  };

  const confirmExcluirLaudo = (id: number) => {
    setLaudoToDelete(id);
    setConfirmDeleteOpen(true);
  };

  const handleDelete = () => {
    if (laudoToDelete !== null) {
      setLaudos((prev) => prev.filter((l) => l.id !== laudoToDelete));
      setConfirmDeleteOpen(false);
      setLaudoToDelete(null);
      setViewLaudo(null);
    }
  };

  const laudosFiltrados = laudos.filter((l) =>
    [l.descricao, l.tipoLaudo, l.tipoInstalacao].some((campo) =>
      campo.toLowerCase().includes(busca.toLowerCase())
    )
  );

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="Logo" className="logo" />
          <div className="nav-links">
            <a href="#">HOME</a>
            <a href="#">CLIENTES</a>
            <a href="#">EQUIPAMENTOS</a>
            <a href="#">LAUDOS</a>
          </div>
        </div>
        <div className="navbar-right">
          <span className="user-name">Rafael Marconi</span>
          <div className="user-icon">👤</div>
          <button className="btn-black">SAIR</button>
        </div>
      </nav>

      {/* LISTA DE LAUDOS */}
      <div className="app-container">
        <div className="laudos-header">
          <h1 className="laudos-title">Laudos</h1>
          <button className="btn-yellow" onClick={openNovoLaudo}>
            + Novo Laudo
          </button>
        </div>

        <div className="busca-container">
          <input
            type="text"
            placeholder="BUSCAR"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="campo-busca animate-pulse"
          />
        </div>

        <div className="laudos-grid">
          {laudosFiltrados.map((laudo) => (
            <button
              key={laudo.id}
              className="laudo-card"
              onClick={() => openVisualizarLaudo(laudo)}
              style={{ textAlign: "left", cursor: "pointer" }}
            >
              <div className="laudo-icon">📄</div>
              <h3>{laudo.descricao}</h3>
              <p>Tipo: {laudo.tipoLaudo}</p>
              <p>Status: {laudo.status}</p>
              <p>OS: {laudo.osClickup}</p>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL VISUALIZAR */}
      {viewLaudo && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Visualizar Laudo</h2>
              <button className="modal-close" onClick={() => setViewLaudo(null)}>
                ×
              </button>
            </div>

            <p><strong>Descrição:</strong> {viewLaudo.descricao}</p>
            <p><strong>Tipo de Laudo:</strong> {viewLaudo.tipoLaudo}</p>
            <p><strong>Tipo de Instalação:</strong> {viewLaudo.tipoInstalacao}</p>
            <p><strong>Status:</strong> {viewLaudo.status}</p>
            <p><strong>OS Clickup:</strong> {viewLaudo.osClickup}</p>
            <p><strong>Conteúdo:</strong></p>
            <textarea value={viewLaudo.conteudo} readOnly />

            <p><strong>Data de Inclusão:</strong>{" "}
              {viewLaudo.dataInclusao
                ? new Date(viewLaudo.dataInclusao).toLocaleString()
                : "—"}
            </p>
            {viewLaudo.dataFechamento && (
              <p><strong>Data de Fechamento:</strong>{" "}
                {new Date(viewLaudo.dataFechamento).toLocaleString()}
              </p>
            )}

            <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              <button className="btn-yellow" onClick={() => {
                setViewLaudo(null);
                openEditarLaudo(viewLaudo);
              }}>
                Editar
              </button>
              <button className="btn-red" onClick={() => {
                setViewLaudo(null);
                confirmExcluirLaudo(viewLaudo.id);
              }}>
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL NOVO / EDITAR */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{editingLaudo ? "Editar Laudo Técnico" : "Novo Laudo Técnico"}</h2>
              <button className="modal-close" onClick={() => setModalOpen(false)}>
                ×
              </button>
            </div>

            <input
              type="text"
              name="descricao"
              placeholder="Descrição"
              value={form.descricao}
              onChange={handleChange}
            />

            {/* tipoLaudo como input com datalist */}
            <input
              type="text"
              name="tipoLaudo"
              placeholder="Tipo de Laudo"
              list="sugestoes-laudo"
              value={form.tipoLaudo}
              onChange={handleChange}
            />


            <select
              name="tipoInstalacao"
              value={form.tipoInstalacao}
              onChange={handleChange}
            >
              <option value="">Tipo de Instalação</option>
              <option value="Industrial">Industrial</option>
              <option value="Residencial">Residencial</option>
              <option value="Comercial">Comercial</option>
            </select>

            <select name="status" value={form.status} onChange={handleChange}>
              <option value="">Status</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluído">Concluído</option>
            </select>

            <input
              type="text"
              name="osClickup"
              placeholder="OS Clickup"
              value={form.osClickup}
              onChange={handleChange}
            />

            <textarea
              name="conteudo"
              placeholder="Conteúdo"
              value={form.conteudo}
              onChange={handleChange}
            />

            <label><strong>Preview</strong></label>
            <textarea
              name="preview"
              value={form.preview}
              readOnly
              style={{ backgroundColor: "#eee", color: "#555" }}
            />

            <label><strong>Data de Inclusão</strong></label>
            <input
              type="datetime-local"
              name="dataInclusao"
              value={form.dataInclusao}
              onChange={handleChange}
            />

            <label><strong>Data de Fechamento</strong></label>
            <input
              type="datetime-local"
              name="dataFechamento"
              value={form.dataFechamento}
              onChange={handleChange}
            />

            <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              <button className="btn-yellow" onClick={handleSubmit}>
                {editingLaudo ? "Salvar Alterações" : "Salvar"}
              </button>
              <button className="btn-black" onClick={() => setModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMAR EXCLUSÃO */}
      {confirmDeleteOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Tem certeza que deseja excluir esse laudo?</h3>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button className="btn-red" onClick={handleDelete}>
                Sim, excluir
              </button>
              <button className="btn-black" onClick={() => setConfirmDeleteOpen(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
