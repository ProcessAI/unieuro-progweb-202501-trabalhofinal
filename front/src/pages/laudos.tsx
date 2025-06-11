import React, { useState, useEffect } from 'react';
import './laudos.css';

interface Laudo {
  id: number;
  titulo: string;
  descricao: string;
  tipoEquipamentoId: number;
}

const laudoVazio: Omit<Laudo, 'id'> = {
  titulo: '',
  descricao: '',
  tipoEquipamentoId: 0,
};

const API_URL = 'http://localhost:3000/api/laudos';

const Laudos: React.FC = () => {
  const [laudos, setLaudos] = useState<Laudo[]>([]);
  const [modal, setModal] = useState<'novo' | 'editar' | 'visualizar' | 'excluir' | null>(null);
  const [laudoAtual, setLaudoAtual] = useState<Laudo | Omit<Laudo, 'id'>>(laudoVazio);
  const [menuAberto, setMenuAberto] = useState(false);

  // Carregar laudos do backend
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setLaudos);
  }, []);

  // Funções para abrir modais
  const abrirNovo = () => { setLaudoAtual(laudoVazio); setModal('novo'); };
  const abrirEditar = (laudo: Laudo) => { setLaudoAtual(laudo); setModal('editar'); };
  const abrirVisualizar = (laudo: Laudo) => { setLaudoAtual(laudo); setModal('visualizar'); };
  const abrirExcluir = (laudo: Laudo) => { setLaudoAtual(laudo); setModal('excluir'); };

  // CRUD com backend
  const criarLaudo = async () => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(laudoAtual),
    });
    const novo = await res.json();
    setLaudos([...laudos, novo]);
    setModal(null);
  };
  const atualizarLaudo = async () => {
    if (!('id' in laudoAtual)) return;
    const res = await fetch(`${API_URL}/${laudoAtual.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(laudoAtual),
    });
    const atualizado = await res.json();
    setLaudos(laudos.map(l => l.id === atualizado.id ? atualizado : l));
    setModal(null);
  };
  const excluirLaudo = async () => {
    if (!('id' in laudoAtual)) return;
    await fetch(`${API_URL}/${laudoAtual.id}`, { method: 'DELETE' });
    setLaudos(laudos.filter(l => l.id !== laudoAtual.id));
    setModal(null);
  };

  return (
    <div>
      {/* MENU SUPERIOR */}
      <div className="menu-superior">
        {/* Botão hambúrguer (mobile) */}
        <button className="hamburger" onClick={() => setMenuAberto(!menuAberto)}>
          <span />
          <span />
          <span />
        </button>
        {/* Menu lateral (mobile) */}
        <nav className={`side-menu${menuAberto ? ' open' : ''}`}>
          <img src="/logo.png" alt="Logo" style={{ height: 32, margin: '16px auto' }} />
          <a href="/" onClick={() => setMenuAberto(false)}>HOME</a>
          <a href="/clientes" onClick={() => setMenuAberto(false)}>CLIENTES</a>
          <a href="/produtos" onClick={() => setMenuAberto(false)}>PRODUTOS</a>
          <a href="/equipamentos" onClick={() => setMenuAberto(false)}>EQUIPAMENTOS</a>
          <a href="/laudos" onClick={() => setMenuAberto(false)}>LAUDOS</a>
        </nav>
        {/* Menu tradicional (desktop) */}
        <div className="links">
          <img src="/logo.png" alt="Logo" style={{ height: 32, marginRight: 12 }} />
          <a href="/">HOME</a>
          <a href="/clientes">CLIENTES</a>
          <a href="/produtos">PRODUTOS</a>
          <a href="/equipamentos">EQUIPAMENTOS</a>
          <a href="/laudos">LAUDOS</a>
        </div>
        {/* Nome e sair */}
        <div className="user-area">
          <span>Rafael Marconi</span>
          <button>SAIR</button>
        </div>
      </div>
      {/* FIM DO MENU SUPERIOR */}

      <div className="top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 16 }}>
        <input placeholder="BUSCAR" style={{ width: 200, padding: 8 }} />
        <button className="novo-laudo-btn" style={{ background: '#FFD600', padding: '8px 16px', borderRadius: 6, fontWeight: 'bold' }} onClick={abrirNovo}>+ Novo Laudo</button>
      </div>
      <div className="laudos-list">
        {laudos.map(laudo => (
          <div
            key={laudo.id}
            className="laudo-card"
            onClick={() => abrirVisualizar(laudo)}
          >
            <strong>{laudo.titulo}</strong>
            <div>Descrição: {laudo.descricao}</div>
            <div>Tipo Equipamento ID: {laudo.tipoEquipamentoId}</div>
          </div>
        ))}
      </div>

      {/* Modal Novo/Editar */}
      {(modal === 'novo' || modal === 'editar') && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modal === 'novo' ? 'Novo Laudo Técnico' : 'Editar Laudo'}</h2>
            <input placeholder="Título" value={laudoAtual.titulo} onChange={e => setLaudoAtual({ ...laudoAtual, titulo: e.target.value })} />
            <input placeholder="Descrição" value={laudoAtual.descricao} onChange={e => setLaudoAtual({ ...laudoAtual, descricao: e.target.value })} />
            <input placeholder="Tipo Equipamento ID" type="number" value={laudoAtual.tipoEquipamentoId} onChange={e => setLaudoAtual({ ...laudoAtual, tipoEquipamentoId: Number(e.target.value) })} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}>
              {modal === 'novo' ? (
                <button style={{ background: '#43C463', color: '#fff' }} onClick={criarLaudo}>Criar</button>
              ) : (
                <button style={{ background: '#43C463', color: '#fff' }} onClick={atualizarLaudo}>Atualizar</button>
              )}
              <button style={{ background: '#aaa', color: '#fff' }} onClick={() => setModal(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Visualizar */}
      {modal === 'visualizar' && (
        <div className="modal">
          <div className="modal-content">
            <h2>Visualizar Laudo</h2>
            <div><b>Título:</b> {('titulo' in laudoAtual) ? laudoAtual.titulo : ''}</div>
            <div><b>Descrição:</b> {('descricao' in laudoAtual) ? laudoAtual.descricao : ''}</div>
            <div><b>Tipo Equipamento ID:</b> {('tipoEquipamentoId' in laudoAtual) ? laudoAtual.tipoEquipamentoId : ''}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}>
              {'id' in laudoAtual && <button style={{ background: '#FFD600' }} onClick={() => abrirEditar(laudoAtual as Laudo)}>Editar</button>}
              {'id' in laudoAtual && <button style={{ background: '#F44336', color: '#fff' }} onClick={() => abrirExcluir(laudoAtual as Laudo)}>Excluir</button>}
              <button style={{ background: '#aaa', color: '#fff' }} onClick={() => setModal(null)}>Fechar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Excluir */}
      {modal === 'excluir' && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirmar Exclusão</h2>
            <p>Tem certeza que deseja excluir este laudo?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button style={{ background: '#F44336', color: '#fff' }} onClick={excluirLaudo}>Sim, Excluir</button>
              <button style={{ background: '#aaa', color: '#fff' }} onClick={() => setModal(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Laudos;