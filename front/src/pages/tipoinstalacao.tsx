import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './tipoinstalacao.css';

import { getTiposInstalacao, createTipoInstalacao, updateTipoInstalacao, deleteTipoInstalacao } from '../service/tipoinstalacao-api';
import Navbar from '@/components/Navbar';

interface TipoInstalacao {
  idtipoinstalacao: number;
  tipoinstalacaonome: string;
}

export default function TipoInstalacao() {
  const navigate = useNavigate();
  const [instalacoes, setInstalacoes] = useState<TipoInstalacao[]>([]);
  const [busca, setBusca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingInstalacao, setEditingInstalacao] = useState<TipoInstalacao | null>(null);
  const [viewInstalacao, setViewInstalacao] = useState<TipoInstalacao | null>(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [instalacaoToDelete, setInstalacaoToDelete] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const emptyForm: Omit<TipoInstalacao, "idtipoinstalacao"> = { tipoinstalacaonome: "" };
  const [form, setForm] = useState<Omit<TipoInstalacao, "idtipoinstalacao">>(emptyForm);

  useEffect(() => { loadInstalacoes(); }, []);

  const loadInstalacoes = async () => {
    try {
      setLoading(true);
      const data = await getTiposInstalacao();
      setInstalacoes(data);
    } catch (error) {
      console.error('Erro ao carregar tipos de instalação:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => setForm(emptyForm);

  const openNovaInstalacao = () => {
    setEditingInstalacao(null);
    resetForm();
    setModalOpen(true);
  };

  const openEditarInstalacao = (instalacao: TipoInstalacao) => {
    setEditingInstalacao(instalacao);
    const { idtipoinstalacao, ...rest } = instalacao;
    setForm(rest);
    setModalOpen(true);
  };

  const openVisualizarInstalacao = (instalacao: TipoInstalacao) => {
    setViewInstalacao(instalacao);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const payload = { tipoinstalacaonome: form.tipoinstalacaonome };
      if (payload.tipoinstalacaonome.trim() === "") {
        alert("O nome da instalação não pode estar vazio.");
        return;
      }
      if (editingInstalacao) {
        await updateTipoInstalacao(editingInstalacao.idtipoinstalacao, payload);
      } else {
        await createTipoInstalacao(payload);
      }
      await loadInstalacoes();
      setModalOpen(false);
      setEditingInstalacao(null);
    } catch (error) {
      console.error('Erro ao salvar tipo de instalação:', error);
    } finally {
      setLoading(false);
    }
  };

  const confirmExcluirInstalacao = (id: number) => {
    setInstalacaoToDelete(id);
    setConfirmDeleteOpen(true);
  };

  const handleDelete = async () => {
    if (instalacaoToDelete !== null) {
      try {
        setLoading(true);
        await deleteTipoInstalacao(instalacaoToDelete);
        await loadInstalacoes();
        setConfirmDeleteOpen(false);
        setInstalacaoToDelete(null);
        setViewInstalacao(null);
      } catch (error) {
        console.error('Erro ao excluir tipo de instalação:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const instalacoesFiltradas = instalacoes.filter((i) =>
    i.tipoinstalacaonome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
    <Navbar/>
      {/* LISTAGEM */}
      <div className="app-container">
        <div className="instalacoes-header">
          <div className="instalacoes-left">
            <h2 className="instalacoes-title">Tipo de Instalação</h2>
            <div className="busca-container">
              <input
                type="text"
                placeholder="BUSCAR"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="campo-busca"
              />
            </div>
          </div>

          <div className="instalacoes-right">
            <button className="btn-yellow" onClick={openNovaInstalacao} disabled={loading}>
              + Novo Tipo de Instalação
            </button>
          </div>
        </div>

        {loading ? (
          <div>Carregando...</div>
        ) : (
          <div className="instalacoes-grid">
            {instalacoesFiltradas.map((instalacao) => (
              <button
                key={instalacao.idtipoinstalacao}
                className="instalacao-card"
                onClick={() => openVisualizarInstalacao(instalacao)}
              >
                <div className="instalacao-icon">🏗️</div>
                <h3>{instalacao.tipoinstalacaonome}</h3>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MODAL VISUALIZAR */}
      {viewInstalacao && (
        <div className="modal-overlay-tipoinstalacao">
          <div className="modal-tipoinstalacao">
            <div className="modal-header-tipoinstalacao">
              <h2>Visualizar Tipo de Instalação</h2>
              <button className="modal-close-tipoinstalacao" onClick={() => setViewInstalacao(null)}>×</button>
            </div>
            <p><strong>Descrição / Nome:</strong> {viewInstalacao.tipoinstalacaonome}</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              <button className="btn-yellow" onClick={() => {
                setViewInstalacao(null);
                openEditarInstalacao(viewInstalacao);
              }}>
                Editar
              </button>
              <button className="btn-red" onClick={() => {
                setViewInstalacao(null);
                confirmExcluirInstalacao(viewInstalacao.idtipoinstalacao);
              }}>
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL NOVO / EDITAR */}
      {modalOpen && (
        <div className="modal-overlay-tipoinstalacao">
          <div className="modal-tipoinstalacao">
            <div className="modal-header-tipoinstalacao">
              <h2>{editingInstalacao ? "Editar Tipo de Instalação" : "Novo Tipo de Instalação"}</h2>
              <button className="modal-close-tipoinstalacao" onClick={() => setModalOpen(false)}>×</button>
            </div>
            <input
              type="text"
              name="tipoinstalacaonome"
              placeholder="Descrição / Nome"
              value={form.tipoinstalacaonome}
              onChange={handleChange}
            />
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button className="btn-yellow" onClick={handleSubmit} disabled={loading}>
                {editingInstalacao ? "Salvar Alterações" : "Criar"}
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
        <div className="modal-overlay-tipoinstalacao">
          <div className="modal-tipoinstalacao">
            <h3>Tem certeza que deseja excluir esse tipo de instalação?</h3>
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
