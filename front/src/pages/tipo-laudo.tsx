import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './tipo-laudo.css';
import Markdown from '../components/Markdown'; // Import the Markdown component

import {getTiposLaudo,createTipoLaudo,updateTipoLaudo,deleteTipoLaudo} from '../service/tipolaudo-api'
import Navbar from '@/components/Navbar';

interface TipoLaudo {
  idtipolaudo: number;
  tipolaudonome: string;
  tipolaudotemplate?: string;
}

export default function TipoLaudo() {
  const navigate = useNavigate();
  const [laudos, setLaudos] = useState<TipoLaudo[]>([]);
  const [busca, setBusca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLaudo, setEditingLaudo] = useState<TipoLaudo | null>(null);
  const [viewLaudo, setViewLaudo] = useState<TipoLaudo | null>(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [laudoToDelete, setLaudoToDelete] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const emptyForm: Omit<TipoLaudo, "idtipolaudo"> = {
    tipolaudonome: "",
    tipolaudotemplate: "",
  };

  const [form, setForm] = useState<Omit<TipoLaudo, "idtipolaudo">>(emptyForm);

  // Referência para o componente Markdown para acessar o estado interno
  const markdownRef = useRef<any>(null);

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

  const resetForm = () => {
    setForm(emptyForm);
    setErrors({});
  };

  const openNovoLaudo = () => {
    setEditingLaudo(null);
    resetForm();
    setModalOpen(true);
  };

  const openEditarLaudo = (laudo: TipoLaudo) => {
    setEditingLaudo(laudo);
    const { idtipolaudo, ...rest } = laudo;
    setForm(rest);
    setErrors({});
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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Função para atualizar o markdown em tempo real
  const handleMarkdownChange = (conteudo: string) => {
    setForm(prev => ({ 
      ...prev, 
      tipolaudotemplate: conteudo 
    }));
    
    // Clear template error when user starts typing
    if (errors.tipolaudotemplate) {
      setErrors(prev => ({ ...prev, tipolaudotemplate: '' }));
    }
  };

  // Função para forçar a sincronização do markdown antes de salvar
  const sincronizarMarkdown = () => {
    if (markdownRef.current) {
      const { markdown } = markdownRef.current.getEstadoAtual();
      setForm(prev => ({
        ...prev,
        tipolaudotemplate: markdown
      }));
      return markdown;
    }
    return null;
  };

  // Validation function
  const validateForm = (formData: Omit<TipoLaudo, "idtipolaudo">) => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.tipolaudonome.trim()) {
      newErrors.tipolaudonome = 'Nome é obrigatório';
    }

    if (!formData.tipolaudotemplate?.trim()) {
      newErrors.tipolaudotemplate = 'Template é obrigatório';
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      
      // Sincroniza o markdown antes de validar
      const syncedMarkdown = sincronizarMarkdown();
      
      // Use the synced markdown for validation
      const formToValidate = {
        ...form,
        tipolaudotemplate: syncedMarkdown || form.tipolaudotemplate
      };
      
      // Validate form
      const validationErrors = validateForm(formToValidate);
      
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      
      const payload = {
        tipolaudonome: formToValidate.tipolaudonome,
        tipolaudotemplate: formToValidate.tipolaudotemplate || undefined
      };
      
      if (editingLaudo) {
        await updateTipoLaudo(editingLaudo.idtipolaudo, payload);
      } else {
        await createTipoLaudo(payload);
      }
      await loadLaudos(); // Reload data after create/update
      setModalOpen(false);
      setEditingLaudo(null);
      resetForm();
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
      <Navbar/>
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
                <p>Template: {laudo.tipolaudotemplate ? 'Configurado' : 'Não configurado'}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MODAL VISUALIZAR */}
      {viewLaudo && (
        <div className="modal-overlay-tipolaudo">
          <div className="modal-tipolaudo">
            <div className="modal-header-tipolaudo">
              <h2>Visualizar Tipo de Laudo</h2>
              <button className="modal-close-tipolaudo" onClick={() => setViewLaudo(null)}>
                ×
              </button>
            </div>

            <p><strong>Descrição / Nome:</strong> {viewLaudo?.tipolaudonome}</p>
            
            <div>
              <strong>Template:</strong>
              <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '5px', borderRadius: '4px' }}>
                {viewLaudo?.tipolaudotemplate ? (
                  <Markdown 
                    value={viewLaudo.tipolaudotemplate} 
                    mode="somente-leitura"
                  />
                ) : (
                  <em>Nenhum template configurado</em>
                )}
              </div>
            </div>

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
        <div className="modal-overlay-tipolaudo">
          <div className="modal-tipolaudo" style={{ maxWidth: '800px', width: '90%' }}>
            <div className="modal-header-tipolaudo">
              <h2>{editingLaudo ? "Editar Tipo de Laudo Técnico" : "Novo Tipo de Laudo Técnico"}</h2>
              <button className="modal-close-tipolaudo" onClick={() => setModalOpen(false)}>
                ×
              </button>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <input
                type="text"
                name="tipolaudonome"
                placeholder="Descrição / Nome"
                value={form.tipolaudonome}
                onChange={handleChange}
                style={{ 
                  marginBottom: '5px',
                  borderColor: errors.tipolaudonome ? '#dc3545' : undefined
                }}
              />
              {errors.tipolaudonome && (
                <div style={{ 
                  color: '#dc3545', 
                  fontSize: '0.875rem', 
                  marginTop: '2px' 
                }}>
                  {errors.tipolaudonome}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Template (Markdown):
              </label>
              <div style={{ 
                border: errors.tipolaudotemplate ? '1px solid #dc3545' : undefined,
                borderRadius: '4px'
              }}>
                <Markdown
                  ref={markdownRef}
                  value={form.tipolaudotemplate || ''}
                  onChange={handleMarkdownChange}
                />
              </div>
              {errors.tipolaudotemplate && (
                <div style={{ 
                  color: '#dc3545', 
                  fontSize: '0.875rem', 
                  marginTop: '2px' 
                }}>
                  {errors.tipolaudotemplate}
                </div>
              )}
            </div>

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
        <div className="modal-overlay-tipolaudo">
          <div className="modal-tipolaudo">
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