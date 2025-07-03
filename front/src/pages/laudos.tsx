import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Markdown from '../components/Markdown';
import {
  listarLaudos,
  criarLaudo,
  atualizarLaudo,
  deletarLaudo,
  Laudo,
} from '../service/laudos-api';
import './laudos.css';

interface TipoInstalacao {
  idtipoinstalacao: number;
  tipoinstalacaonome: string;
}

interface TipoLaudo {
  idtipolaudo: number;
  tipolaudonome: string;
}

const laudoVazio: Omit<Laudo, 'idlaudo' | 'laudodatainclusao'> = {
  laudodescricao: '',
  laudohtmlmd: '',
  idtipolaudo: 0,
  idtipoinstalacao: 0,
  laudoosclickup: '',
  laudostatus: 1,
};

const Laudos: React.FC = () => {
  const navigate = useNavigate();
  const [laudos, setLaudos] = useState<Laudo[]>([]);
  const [modal, setModal] = useState<'novo' | 'editar' | 'visualizar' | 'excluir' | null>(null);
  const [laudoAtual, setLaudoAtual] = useState<
    Laudo | Omit<Laudo, 'idlaudo' | 'laudodatainclusao'>
  >(laudoVazio);

  const [tiposInstalacao, setTiposInstalacao] = useState<TipoInstalacao[]>([]);
  const [tiposLaudo, setTiposLaudo] = useState<TipoLaudo[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function carregarDados() {
      try {
        const dadosLaudos = await listarLaudos();
        setLaudos(dadosLaudos);
      } catch (err) {
        console.error('Erro ao carregar laudos:', err);
      }
      try {
        const respInstalacao = await fetch('https://laudinho.cleversystems.net/api/tipo-instalacao');
        const dadosInstalacao = await respInstalacao.json();
        setTiposInstalacao(dadosInstalacao);
      } catch (err) {
        console.error('Erro ao carregar tipos de instalação:', err);
      }
      try {
        const respLaudo = await fetch('https://laudinho.cleversystems.net/api/tipo-laudo');
        const dadosLaudo = await respLaudo.json();
        setTiposLaudo(dadosLaudo);
      } catch (err) {
        console.error('Erro ao carregar tipos de laudo:', err);
      }
    }
    carregarDados();
  }, []);

  const laudosFiltrados = laudos.filter(l =>
    (l.laudodescricao ?? '').toLowerCase().includes(search.toLowerCase())
  );

  // ...handlers (abrirNovo, abrirEditar, etc) permanecem iguais...

  const abrirNovo = () => {
    setLaudoAtual(laudoVazio);
    setModal('novo');
  };
  const abrirEditar = (laudo: Laudo) => {
    setLaudoAtual(laudo);
    setModal('editar');
  };
  const abrirVisualizar = (laudo: Laudo) => {
    setLaudoAtual(laudo);
    setModal('visualizar');
  };
  const abrirExcluir = (laudo: Laudo) => {
    setLaudoAtual(laudo);
    setModal('excluir');
  };

  const criarLaudoHandler = async () => {
    try {
      const { idtipolaudo, idtipoinstalacao, laudostatus } = laudoAtual;

      if (!idtipolaudo || idtipolaudo === 0) {
        alert("Selecione um tipo de laudo válido.");
        return;
      }

      if (!idtipoinstalacao || idtipoinstalacao === 0) {
        alert("Selecione um tipo de instalação válido.");
        return;
      }

      if (!laudostatus || ![1, 2, 3].includes(laudostatus)) {
        alert("Selecione um status válido.");
        return;
      }

      const novo = await criarLaudo(laudoAtual);
      setLaudos([...laudos, novo]);
      setModal(null);
    } catch (err) {
      console.error("Erro ao criar laudo:", err);
    }
  };

  const atualizarLaudoHandler = async () => {
    try {
      if (!('idlaudo' in laudoAtual)) return;

      const { idtipolaudo, idtipoinstalacao, laudostatus } = laudoAtual;

      if (!idtipolaudo || idtipolaudo === 0) {
        alert("Selecione um tipo de laudo válido.");
        return;
      }

      if (!idtipoinstalacao || idtipoinstalacao === 0) {
        alert("Selecione um tipo de instalação válido.");
        return;
      }

      if (!laudostatus || ![1, 2, 3].includes(laudostatus)) {
        alert("Selecione um status válido.");
        return;
      }

      const atualizado = await atualizarLaudo(laudoAtual.idlaudo, laudoAtual);
      setLaudos(laudos.map((l) => (l.idlaudo === atualizado.idlaudo ? atualizado : l)));
      setModal(null);
    } catch (err) {
      console.error("Erro ao atualizar laudo:", err);
    }
  };

  const excluirLaudoHandler = async () => {
    try {
      if (!('idlaudo' in laudoAtual)) return;
      await deletarLaudo(laudoAtual.idlaudo);
      setLaudos(laudos.filter((l) => l.idlaudo !== laudoAtual.idlaudo));
      setModal(null);
    } catch (err) {
      console.error('Erro ao deletar laudo:', err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="bg-gray-100 px-6 py-4 max-w-5xl mx-auto sticky top-[80px] z-40 border-b border-gray-300 flex justify-between items-center">
        <Input
          placeholder="BUSCAR"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Button
          className="bg-yellow-400 text-black font-bold"
          onClick={abrirNovo}
        >
          + Novo Laudo
        </Button>
      </div>

      <div className="laudos-list max-w-5xl mx-auto pt-4">
        {laudosFiltrados.map((laudo) => (
          <div key={laudo.idlaudo} className="laudo-card">
            <strong style={{ fontSize: 22 }}>{laudo.laudodescricao}</strong>
            <div>
              Tipo:{' '}
              {tiposLaudo.find((t) => t.idtipolaudo === laudo.idtipolaudo)?.tipolaudonome || laudo.idtipolaudo}
            </div>
            <div>
              <div>
                Status:{" "}
                <select
                  value={laudo.laudostatus}
                  onChange={async (e) => {
                    const novoStatus = Number(e.target.value);
                    await atualizarLaudo(laudo.idlaudo, { ...laudo, laudostatus: novoStatus });
                    setLaudos((prev) =>
                      prev.map((l) =>
                        l.idlaudo === laudo.idlaudo ? { ...l, laudostatus: novoStatus } : l
                      )
                    );
                  }}
                  style={{ fontWeight: "bold", borderRadius: 4, padding: "2px 6px" }}
                >
                  <option value={1}>Pendente</option>
                  <option value={2}>Em andamento</option>
                  <option value={3}>Finalizado</option>
                </select>
              </div>
            </div>
            <div>OS: {laudo.laudoosclickup}</div>
            <div className="acoes-laudo" style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              <Button
                variant="outline"
                onClick={() => abrirVisualizar(laudo)}
              >
                Visualizar
              </Button>
              <Button
                className="bg-yellow-400 text-black"
                onClick={() => abrirEditar(laudo)}
              >
                Editar
              </Button>
              <Button
                variant="destructive"
                onClick={() => abrirExcluir(laudo)}
              >
                Excluir
              </Button>
            </div>
          </div>
        ))}
      </div>

      {(modal === 'novo' || modal === 'editar') && (
  <div className="modal">
    <div className="modal-content">
      <h2>{modal === 'novo' ? 'Novo Laudo Técnico' : 'Edição de Laudo Técnico'}
        <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => setModal(null)}>×</span>
      </h2>
      <input
        placeholder="Descrição"
        value={'laudodescricao' in laudoAtual ? laudoAtual.laudodescricao : ''}
        onChange={(e) => setLaudoAtual({ ...laudoAtual, laudodescricao: e.target.value } as any)}
      />

      <select
        value={'idtipolaudo' in laudoAtual ? laudoAtual.idtipolaudo : 0}
        onChange={(e) =>
          setLaudoAtual({ ...laudoAtual, idtipolaudo: Number(e.target.value) } as any)
        }
      >
        <option value={0}>Tipo de Laudo</option>
        {tiposLaudo.map((tipo) => (
          <option key={tipo.idtipolaudo} value={tipo.idtipolaudo}>
            {tipo.tipolaudonome}
          </option>
        ))}
      </select>

      <select
        value={'idtipoinstalacao' in laudoAtual ? laudoAtual.idtipoinstalacao : 0}
        onChange={(e) =>
          setLaudoAtual({ ...laudoAtual, idtipoinstalacao: Number(e.target.value) } as any)
        }
      >
        <option value={0}>Tipo de Instalação</option>
        {tiposInstalacao.map((tipo) => (
          <option key={tipo.idtipoinstalacao} value={tipo.idtipoinstalacao}>
            {tipo.tipoinstalacaonome}
          </option>
        ))}
      </select>

      <select
        value={'laudostatus' in laudoAtual ? laudoAtual.laudostatus : 0}
        onChange={(e) =>
          setLaudoAtual({ ...laudoAtual, laudostatus: Number(e.target.value) } as any)
        }
      >
        <option value={0}>Status</option>
        <option value={1}>Pendente</option>
        <option value={2}>Em andamento</option>
        <option value={3}>Finalizado</option>
      </select>

      <input
        placeholder="OS Clickup"
        value={'laudoosclickup' in laudoAtual ? laudoAtual.laudoosclickup ?? '' : ''}
        onChange={(e) => setLaudoAtual({ ...laudoAtual, laudoosclickup: e.target.value } as any)}
      />

      {/* Markdown editor para o conteúdo */}
      <Markdown
        value={'laudohtmlmd' in laudoAtual ? laudoAtual.laudohtmlmd : ''}
        onChange={(conteudo) => setLaudoAtual({ ...laudoAtual, laudohtmlmd: conteudo } as any)}
      />

      <b>Data de Fechamento</b>
      <input
        type="datetime-local"
        placeholder="dd/mm/aaaa --:--"
        value={'laudofechamento' in laudoAtual && laudoAtual.laudofechamento
          ? laudoAtual.laudofechamento.slice(0, 16)
          : ''}
        onChange={(e) =>
          setLaudoAtual({ ...laudoAtual, laudofechamento: e.target.value } as any)
        }
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}>
        <button
          style={{ background: '#FFD600', color: '#222' }}
          onClick={modal === 'novo' ? criarLaudoHandler : atualizarLaudoHandler}
        >
          {modal === 'novo' ? 'CRIAR' : 'EDITAR'}
        </button>
        <button style={{ background: '#B0B4B9', color: '#fff' }} onClick={() => setModal(null)}>
          Cancelar
        </button>
      </div>
    </div>
  </div>
)}

      {modal === 'visualizar' && (
        <div className="modal">
          <div className="modal-content">
            <h2>Visualizar Laudo <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => setModal(null)}>×</span></h2>
            <div>
              <b>Descrição:</b> {'laudodescricao' in laudoAtual ? laudoAtual.laudodescricao : ''}
            </div>
            <div>
              <b>Tipo de Laudo:</b>{' '}
              {tiposLaudo.find((t) => t.idtipolaudo === laudoAtual.idtipolaudo)?.tipolaudonome ||
                laudoAtual.idtipolaudo}
            </div>
            <div>
              <b>Tipo de Instalação:</b>{' '}
              {tiposInstalacao.find((t) => t.idtipoinstalacao === laudoAtual.idtipoinstalacao)
                ?.tipoinstalacaonome || laudoAtual.idtipoinstalacao}
            </div>
            <div>
              <b>Status:</b> {laudoAtual.laudostatus === 1 ? "pendente" : laudoAtual.laudostatus === 2 ? "em andamento" : "finalizado"}
            </div>
            <div>
              <b>OS Clickup:</b> {laudoAtual.laudoosclickup}
            </div>
            <div>
              <b>Conteúdo:</b>
            </div>
            <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '5px' }}>
              {'laudohtmlmd' in laudoAtual && laudoAtual.laudohtmlmd ? (
                <Markdown value={laudoAtual.laudohtmlmd} />
              ) : (
                'Nenhum conteúdo'
              )}
            </div>
            {'idlaudo' in laudoAtual && laudoAtual.laudodatainclusao && (
              <div style={{ marginTop: 10 }}>
                <b>Data de Inclusão:</b> {laudoAtual.laudodatainclusao}
              </div>
            )}
            {'idlaudo' in laudoAtual && laudoAtual.laudofechamento && (
              <div>
                <b>Data de Fechamento:</b> {laudoAtual.laudofechamento}
              </div>
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 8,
                marginTop: 16,
              }}
            >
              <button
                style={{ background: '#FFD600', fontWeight: 'bold' }}
                onClick={() => abrirEditar(laudoAtual as Laudo)}
              >
                EDITAR
              </button>
              <button
                style={{ background: '#F44336', color: '#fff', fontWeight: 'bold' }}
                onClick={() => abrirExcluir(laudoAtual as Laudo)}
              >
                EXCLUIR
              </button>
              <button style={{ background: '#aaa', color: '#fff' }} onClick={() => setModal(null)}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {modal === 'excluir' && (
        <div className="modal">
          <div className="modal-content modal-excluir">
            <h2>
              Confirmar Exclusão
              <span
                style={{ float: 'right', cursor: 'pointer' }}
                onClick={() => setModal(null)}
              >
                ×
              </span>
            </h2>
            <p style={{ textAlign: 'center', fontSize: 20, margin: '32px 0' }}>
              Tem certeza que deseja excluir este laudo?
            </p>
            <div className="modal-actions">
              <button
                className="btn-excluir"
                onClick={excluirLaudoHandler}
              >
                Sim, Excluir
              </button>
              <button
                className="btn-cancelar"
                onClick={() => setModal(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Laudos;
