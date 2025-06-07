import React, { useState } from 'react';
import './index.css';

export default function App() {
  /* -------------------------------------------------------------------- */
  /* ESTADO                                                               */
  /* -------------------------------------------------------------------- */
  const [laudos, setLaudos] = useState([
    { id: 1, descricao: 'Vistoria geral da instalação A', os: 'OS12345' },
    { id: 2, descricao: 'Inspeção de segurança predial', os: 'OS67890' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [laudoToDelete, setLaudoToDelete] = useState<number | null>(null);
  const [editingLaudo, setEditingLaudo] = useState<any>(null);
  const [form, setForm] = useState({
    descricao: '',
    markdown: '',
    data: '',
    status: '',
    tipoLaudo: '',
    tipoInstalacao: '',
    osClickup: '',
  });

  /* -------------------------------------------------------------------- */
  /* HANDLERS                                                             */
  /* -------------------------------------------------------------------- */
  const openNovoLaudo = () => {
    setEditingLaudo(null);
    setForm({
      descricao: '',
      markdown: '',
      data: '',
      status: '',
      tipoLaudo: '',
      tipoInstalacao: '',
      osClickup: '',
    });
    setModalOpen(true);
  };

  const openEditarLaudo = (laudo: any) => {
    setEditingLaudo(laudo);
    setForm({
      descricao: laudo.descricao,
      markdown: '',
      data: '',
      status: 'concluido',
      tipoLaudo: 'Elétrico',
      tipoInstalacao: 'Residencial',
      osClickup: laudo.os,
    });
    setModalOpen(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (editingLaudo) {
      // atualização
      setLaudos(prev =>
        prev.map(l =>
          l.id === editingLaudo.id ? { ...l, ...form, os: form.osClickup } : l
        )
      );
    } else {
      // novo laudo
      setLaudos(prev => [
        ...prev,
        { id: Date.now(), descricao: form.descricao, os: form.osClickup },
      ]);
    }
    setModalOpen(false);
  };

  const confirmExcluirLaudo = (id: number) => {
    setLaudoToDelete(id);
    setConfirmDeleteOpen(true);
  };

  const handleDelete = () => {
    if (laudoToDelete !== null) {
      setLaudos(prev => prev.filter(l => l.id !== laudoToDelete));
      setConfirmDeleteOpen(false);
      setLaudoToDelete(null);
    }
  };

  /* -------------------------------------------------------------------- */
  /* RENDER                                                               */
  /* -------------------------------------------------------------------- */
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="Logo" style={{ height: '32px' }} />
          <div className="nav-links">
            <a href="#">HOME</a>
            <a href="#">CLIENTES</a>
            <a href="#">EQUIPAMENTOS</a>
          </div>
        </div>

        <div className="navbar-right">
          <span className="user-name">Rafael Marconi</span>
          <div className="user-icon" />
          <button className="btn-black">SAIR</button>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className="app-container">
        <div className="laudos-header">
          <h1 className="laudos-title">Laudos</h1>

          <button className="btn-yellow" onClick={openNovoLaudo}>
            Novo Laudo
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>OS Clickup</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {laudos.map(laudo => (
              <tr key={laudo.id}>
                <td>{laudo.descricao}</td>
                <td>{laudo.os}</td>
                <td>
                  <button
                    className="btn-yellow"
                    onClick={() => openEditarLaudo(laudo)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-red"
                    onClick={() => confirmExcluirLaudo(laudo.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de novo/editar */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{editingLaudo ? 'Editar Laudo' : 'Novo Laudo'}</h2>
              <button
                className="modal-close"
                onClick={() => setModalOpen(false)}
              >
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
            <textarea
              name="markdown"
              placeholder="HTML Markdown"
              value={form.markdown}
              onChange={handleChange}
            />
            <input
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
            />
            <input
              type="text"
              name="status"
              placeholder="Status"
              value={form.status}
              onChange={handleChange}
            />
            <input
              type="text"
              name="tipoLaudo"
              placeholder="Tipo de Laudo"
              value={form.tipoLaudo}
              onChange={handleChange}
            />
            <input
              type="text"
              name="tipoInstalacao"
              placeholder="Tipo de Instalação"
              value={form.tipoInstalacao}
              onChange={handleChange}
            />
            <input
              type="text"
              name="osClickup"
              placeholder="OS Clickup"
              value={form.osClickup}
              onChange={handleChange}
            />

            <button className="btn-yellow" onClick={handleSubmit}>
              {editingLaudo ? 'Atualizar' : 'Salvar'}
            </button>
          </div>
        </div>
      )}

      {/* Modal de confirmação de exclusão */}
      {confirmDeleteOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Tem certeza que deseja excluir?</h3>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button className="btn-red" onClick={handleDelete}>
                Sim
              </button>
              <button
                className="btn-black"
                onClick={() => setConfirmDeleteOpen(false)}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
