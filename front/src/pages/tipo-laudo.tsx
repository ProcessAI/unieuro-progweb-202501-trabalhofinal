import React, { useState, useEffect } from "react";
import './tipo-laudo.css';

import {getTiposLaudo,createTipoLaudo,updateTipoLaudo,deleteTipoLaudo} from '../service/tipolaudo-api'

interface TipoLaudo {
  idtipolaudo: number;
  tipolaudonome: string;
  tipolaudotemplate?: string;
}


export default function App() {
  const [laudos, setLaudos] = useState<TipoLaudo[]>([]);
  const [busca, setBusca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLaudo, setEditingLaudo] = useState<TipoLaudo | null>(null);
  const [viewLaudo, setViewLaudo] = useState<TipoLaudo | null>(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [laudoToDelete, setLaudoToDelete] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const emptyForm: Omit<TipoLaudo, "idtipolaudo"> = {
    tipolaudonome: "",
    tipolaudotemplate: "",
  };

  const [form, setForm] = useState<Omit<TipoLaudo, "idtipolaudo">>(emptyForm);

  // Load laudos on component mount
  useEffect(() => {
    loadLaudos();
  }, []);

  const loadLaudos = async () => {
    try {
      setLoading(true);
      const data = await getTiposLaudo();
      setLaudos(data);
    } catch (error) {
      console.error('Error loading laudos:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => setForm(emptyForm);

  const openNovoLaudo = () => {
    setEditingLaudo(null);
    resetForm();
    setModalOpen(true);
  };

  const openEditarLaudo = (laudo: TipoLaudo) => {
    setEditingLaudo(laudo);
    const { idtipolaudo, ...rest } = laudo;
    setForm(rest);
    setModalOpen(true);
  };

  const openVisualizarLaudo = (laudo: TipoLaudo) => {
    setViewLaudo(laudo);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const payload = {
        tipolaudonome: form.tipolaudonome,
        tipolaudotemplate: form.tipolaudotemplate || undefined
      };
      if (editingLaudo) {
        await updateTipoLaudo(editingLaudo.idtipolaudo, payload);
      } else {
        await createTipoLaudo(payload);
      }
      await loadLaudos(); // Reload data after create/update
      setModalOpen(false);
      setEditingLaudo(null);
    } catch (error) {
      console.error('Error saving laudo:', error);
    } finally {
      setLoading(false);
    }
  };

  const confirmExcluirLaudo = (id: number) => {
    setLaudoToDelete(id);
    setConfirmDeleteOpen(true);
  };

  const handleDelete = async () => {
    if (laudoToDelete !== null) {
      try {
        setLoading(true);
        await deleteTipoLaudo(laudoToDelete);
        await loadLaudos(); // Reload data after delete
        setConfirmDeleteOpen(false);
        setLaudoToDelete(null);
        setViewLaudo(null);
      } catch (error) {
        console.error('Error deleting laudo:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const laudosFiltrados = laudos.filter((l) =>
    [l.tipolaudonome, l.tipolaudotemplate ?? ""].some((campo) =>
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
          <span className="profile">Rafael Marconi</span>
          <div className="user-icon">👤</div>
          <button className="logout">SAIR</button>
        </div>
      </nav>

      {/* LISTA DE LAUDOS */}
      <div className="app-container">
        <div className="laudos-header">
          <h1 className="laudos-title">Tipos de Laudos</h1>
          <button className="btn-yellow" onClick={openNovoLaudo} disabled={loading}>
            + Novo Tipo de Laudo
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

        {loading ? (
          <div>Carregando...</div>
        ) : (
          <div className="laudos-grid">
            {laudosFiltrados.map((laudo) => (
              <button
                key={laudo.idtipolaudo}
                className="laudo-card"
                onClick={() => openVisualizarLaudo(laudo)}
                style={{ textAlign: "left", cursor: "pointer" }}
              >
                <div className="laudo-icon">📄</div>
                <h3>{laudo.tipolaudonome}</h3>
                <p>Template: {laudo.tipolaudotemplate}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MODAL VISUALIZAR */}
      {viewLaudo && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Visualizar Tipo de Laudo</h2>
              <button className="modal-close" onClick={() => setViewLaudo(null)}>
                ×
              </button>
            </div>

            <p><strong>Descrição / Nome:</strong> {viewLaudo?.tipolaudonome}</p>
            <p><strong>Template:</strong> {viewLaudo?.tipolaudotemplate}</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              <button className="btn-yellow" onClick={() => {
                if (viewLaudo) {
                  setViewLaudo(null);
                  openEditarLaudo(viewLaudo);
                }
              }} disabled={loading}>
                Editar
              </button>
              <button className="btn-red" onClick={() => {
                if (viewLaudo) {
                  setViewLaudo(null);
                  confirmExcluirLaudo(viewLaudo.idtipolaudo);
                }
              }} disabled={loading}>
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
              <h2>{editingLaudo ? "Editar Tipo de Laudo Técnico" : "Novo Tipo de Laudo Técnico"}</h2>
              <button className="modal-close" onClick={() => setModalOpen(false)}>
                ×
              </button>
            </div>

            <input
              type="text"
              name="tipolaudonome"
              placeholder="Descrição / Nome"
              value={form.tipolaudonome}
              onChange={handleChange}
            />

            <input
              type="text"
              name="tipolaudotemplate"
              placeholder="Template"
              value={form.tipolaudotemplate}
              onChange={handleChange}
            />

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button className="btn-yellow" onClick={handleSubmit} disabled={loading}>
                {editingLaudo ? "Salvar Alterações" : "Criar"}
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
            <h3>Tem certeza que deseja excluir esse tipo de laudo?</h3>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button className="btn-red" onClick={handleDelete} disabled={loading}>
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