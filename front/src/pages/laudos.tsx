import React, { useState } from 'react';
import './laudos.css';

interface Laudo {
  id: number;
  descricao: string;
  tipo: string;
  tipoInstalacao: string;
  status: string;
  osClickup: string;
  conteudo: string;
}

const laudoVazio: Laudo = {
  id: 0,
  descricao: '',
  tipo: '',
  tipoInstalacao: '',
  status: '',
  osClickup: '',
  conteudo: '',
};

const Laudos: React.FC = () => {
  const [laudos, setLaudos] = useState<Laudo[]>([]);
  const [modal, setModal] = useState<'novo' | 'editar' | 'visualizar' | 'excluir' | null>(null);
  const [laudoAtual, setLaudoAtual] = useState<Laudo>(laudoVazio);
  const [menuAberto, setMenuAberto] = useState(false);

  // Funções para abrir modais
  const abrirNovo = () => { setLaudoAtual(laudoVazio); setModal('novo'); };
  const abrirEditar = (laudo: Laudo) => { setLaudoAtual(laudo); setModal('editar'); };
  const abrirVisualizar = (laudo: Laudo) => { setLaudoAtual(laudo); setModal('visualizar'); };
  const abrirExcluir = (laudo: Laudo) => { setLaudoAtual(laudo); setModal('excluir'); };

  // Funções CRUD simuladas
  const criarLaudo = () => {
    setLaudos([...laudos, { ...laudoAtual, id: Date.now() }]);
    setModal(null);
  };
  const atualizarLaudo = () => {
    setLaudos(laudos.map(l => l.id === laudoAtual.id ? laudoAtual : l));
    setModal(null);
  };
  const excluirLaudo = () => {
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
            <strong>{laudo.descricao}</strong>
            <div>Tipo: {laudo.tipo}</div>
            <div>Status: {laudo.status}</div>
            <div>OS: {laudo.osClickup}</div>
          </div>
        ))}
      </div>

      {/* Modal Novo/Editar */}
      {(modal === 'novo' || modal === 'editar') && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modal === 'novo' ? 'Novo Laudo Técnico' : 'Editar Laudo'}</h2>
            <input placeholder="Descrição" value={laudoAtual.descricao} onChange={e => setLaudoAtual({ ...laudoAtual, descricao: e.target.value })} />
            <select value={laudoAtual.tipo} onChange={e => setLaudoAtual({ ...laudoAtual, tipo: e.target.value })}>
              <option value="">Tipo de Laudo</option>
              <option value="corretiva">Corretiva</option>
              <option value="preventiva">Preventiva</option>
            </select>
            <select value={laudoAtual.tipoInstalacao} onChange={e => setLaudoAtual({ ...laudoAtual, tipoInstalacao: e.target.value })}>
              <option value="">Tipo de Instalação</option>
              <option value="servidor">Servidor</option>
              <option value="desktop">Desktop</option>
            </select>
            <select value={laudoAtual.status} onChange={e => setLaudoAtual({ ...laudoAtual, status: e.target.value })}>
              <option value="">Status</option>
              <option value="pendente">Pendente</option>
              <option value="em andamento">Em andamento</option>
              <option value="finalizado">Finalizado</option>
            </select>
            <input placeholder="OS Clickup" value={laudoAtual.osClickup} onChange={e => setLaudoAtual({ ...laudoAtual, osClickup: e.target.value })} />
            <textarea placeholder="Conteúdo" value={laudoAtual.conteudo} onChange={e => setLaudoAtual({ ...laudoAtual, conteudo: e.target.value })} />
            <div><b>Preview</b></div>
            <div style={{ background: '#eee', minHeight: 40, padding: 8 }}>{laudoAtual.conteudo}</div>
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
            <div><b>Descrição:</b> {laudoAtual.descricao}</div>
            <div><b>Tipo de Laudo:</b> {laudoAtual.tipo}</div>
            <div><b>Tipo de Instalação:</b> {laudoAtual.tipoInstalacao}</div>
            <div><b>Status:</b> {laudoAtual.status}</div>
            <div><b>OS Clickup:</b> {laudoAtual.osClickup}</div>
            <div><b>Conteúdo:</b> {laudoAtual.conteudo}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}>
              <button style={{ background: '#FFD600' }} onClick={() => abrirEditar(laudoAtual)}>Editar</button>
              <button style={{ background: '#F44336', color: '#fff' }} onClick={() => abrirExcluir(laudoAtual)}>Excluir</button>
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