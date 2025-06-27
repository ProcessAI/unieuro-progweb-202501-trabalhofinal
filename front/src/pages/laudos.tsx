import React, { useState, useEffect } from 'react';
import './laudos.css';
import Markdown from '../components/Markdown';
import {
  listarLaudos,
  criarLaudo,
  atualizarLaudo,
  deletarLaudo,
  Laudo,
} from '../service/laudos-api';

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
  laudofechamento: '',
};

const Laudos: React.FC = () => {
  const [laudos, setLaudos] = useState<Laudo[]>([]);
  const [modal, setModal] = useState<'novo' | 'editar' | 'visualizar' | 'excluir' | null>(null);
  const [laudoAtual, setLaudoAtual] = useState<
    Laudo | Omit<Laudo, 'idlaudo' | 'laudodatainclusao'>
  >(laudoVazio);

  // Estado para armazenar os tipos carregados do backend
  const [tiposInstalacao, setTiposInstalacao] = useState<TipoInstalacao[]>([]);
  const [tiposLaudo, setTiposLaudo] = useState<TipoLaudo[]>([]);
  const [errors, setErrors] = useState<{ descricao?: string; osClickup?: string }>({});


  // Função para carregar laudos, tipos de instalação e tipos de laudo
  useEffect(() => {
    async function carregarDados() {
      try {
        const dadosLaudos = await listarLaudos();
        setLaudos(dadosLaudos);
      } catch (err) {
        console.error('Erro ao carregar laudos:', err);
      }
      try {
        const respInstalacao = await fetch('http://localhost:8080/api/tipo-instalacao');
        const dadosInstalacao = await respInstalacao.json();
        setTiposInstalacao(dadosInstalacao);
      } catch (err) {
        console.error('Erro ao carregar tipos de instalação:', err);
      }
      try {
        const respLaudo = await fetch('http://localhost:8080/api/tipo-laudo');
        const dadosLaudo = await respLaudo.json();
        setTiposLaudo(dadosLaudo);
      } catch (err) {
        console.error('Erro ao carregar tipos de laudo:', err);
      }
    }
    carregarDados();
  }, []);

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

  const handleMarkdownChange = (conteudo: string) => {
    setLaudoAtual({ ...laudoAtual, laudohtmlmd: conteudo });
  };

  const criarLaudoHandler = async () => {
    try {
      const { idtipolaudo, idtipoinstalacao, laudostatus, laudodescricao, laudoosclickup } = laudoAtual;
      const novosErros: typeof errors = {};

      if (!laudodescricao.trim()) {
        novosErros.descricao = "A descrição é obrigatória.";
      }

      if (!laudoosclickup.trim()) {
        novosErros.osClickup = "O campo OS Clickup é obrigatório.";
      }

      if (!idtipolaudo || idtipolaudo === 0) {
        novosErros.tipoLaudo = "Selecione um tipo de laudo válido.";
      }

      if (!idtipoinstalacao || idtipoinstalacao === 0) {
        novosErros.tipoInstalacao = "Selecione um tipo de instalação válido.";
      }

      if (!laudostatus || ![1, 2, 3].includes(laudostatus)) {
        novosErros.status = "Selecione um status válido.";
      }

      if (Object.keys(novosErros).length > 0) {
        setErrors(novosErros);
        return;
      }

      setErrors({}); // limpa os erros anteriores

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
      const novosErros: typeof errors = {};

      if (!idtipolaudo || idtipolaudo === 0) {
        novosErros.tipoLaudo = "Selecione um tipo de laudo válido.";
      }

      if (!idtipoinstalacao || idtipoinstalacao === 0) {
        novosErros.tipoInstalacao = "Selecione um tipo de instalação válido.";
      }

      if (!laudostatus || ![1, 2, 3].includes(laudostatus)) {
        novosErros.status = "Selecione um status válido.";
      }

      if (!laudoAtual.laudodescricao.trim()) {
        novosErros.descricao = "A descrição é obrigatória.";
      }

      if (!laudoAtual.laudoosclickup.trim()) {
        novosErros.osClickup = "O campo OS Clickup é obrigatório.";
      }

      if (Object.keys(novosErros).length > 0) {
        setErrors(novosErros);
        return;
      }

      setErrors({});

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
    <div>
      <div
        className="top-bar"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 16 }}
      >
        <input placeholder="BUSCAR" style={{ width: 200, padding: 8 }} />
        <button
          className="novo-laudo-btn"
          style={{ background: '#FFD600', padding: '8px 16px', borderRadius: 6, fontWeight: 'bold' }}
          onClick={abrirNovo}
        >
          + Novo Laudo
        </button>
      </div>

      <div className="laudos-list">
        {laudos.map((laudo) => (
          <div key={laudo.idlaudo} className="laudo-card" onClick={() => abrirVisualizar(laudo)}>
            <strong>{laudo.laudodescricao}</strong>
            <div>
              Tipo:{' '}
              {
                // Exibir o nome do tipo de laudo baseado no id
                tiposLaudo.find((t) => t.idtipolaudo === laudo.idtipolaudo)?.tipolaudonome || laudo.idtipolaudo
              }
            </div>
            <div>
              Status: {laudo.laudostatus}
            </div>
            <div>OS: {laudo.laudoosclickup}</div>
          </div>
        ))}
      </div>

      {(modal === 'novo' || modal === 'editar') && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modal === 'novo' ? 'Novo Laudo Técnico' : 'Editar Laudo'}</h2>
            <div className="input-wrapper">
              <input
                placeholder="Descrição"
                className={errors.descricao ? 'input-error' : ''}
                value={'laudodescricao' in laudoAtual ? laudoAtual.laudodescricao : ''}
                onChange={(e) => setLaudoAtual({ ...laudoAtual, laudodescricao: e.target.value } as any)}
              />
              {errors.descricao && (
                <span className="input-error-message">{errors.descricao}</span>
              )}
            </div>

            <input
              placeholder="Conteúdo Markdown"
              value={'laudohtmlmd' in laudoAtual ? laudoAtual.laudohtmlmd : ''}
              onChange={(e) => setLaudoAtual({ ...laudoAtual, laudohtmlmd: e.target.value } as any)}
              style={{ display: 'none' }}
            />

            <div className="input-wrapper">
              <select
                className={errors.tipoLaudo ? 'input-error' : ''}
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
              {errors.tipoLaudo && (
                <span className="input-error-message">{errors.tipoLaudo}</span>
              )}
            </div>

            <div className="input-wrapper">
              <select
                className={errors.tipoInstalacao ? 'input-error' : ''}
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
              {errors.tipoInstalacao && (
                <span className="input-error-message">{errors.tipoInstalacao}</span>
              )}
            </div>

            <div className="input-wrapper">
              <select
                className={errors.status ? 'input-error' : ''}
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
              {errors.status && (
                <span className="input-error-message">{errors.status}</span>
              )}
            </div>

            <div className="input-wrapper">
              <input
                placeholder="OS Clickup"
                className={errors.osClickup ? 'input-error' : ''}
                value={'laudoosclickup' in laudoAtual ? laudoAtual.laudoosclickup ?? '' : ''}
                onChange={(e) => setLaudoAtual({ ...laudoAtual, laudoosclickup: e.target.value } as any)}
              />
              {errors.osClickup && (
                <span className="input-error-message">{errors.osClickup}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Horário de Fechamento:</label>
              <input
                type="time"
                value={laudoAtual.laudofechamento ?? ''}
                onChange={(e) =>
                  setLaudoAtual({ ...laudoAtual, laudofechamento: e.target.value })
                }
              />
            </div>

            <Markdown
              value={'laudohtmlmd' in laudoAtual ? laudoAtual.laudohtmlmd : ''}
              onChange={(value) => setLaudoAtual({ ...laudoAtual, laudohtmlmd: value } as any)}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}>
              {modal === 'novo' ? (
                <button style={{ background: '#43C463', color: '#fff' }} onClick={criarLaudoHandler}>
                  Criar
                </button>
              ) : (
                <button style={{ background: '#43C463', color: '#fff' }} onClick={atualizarLaudoHandler}>
                  Atualizar
                </button>
              )}
              <button style={{ background: '#aaa', color: '#fff' }} onClick={() => setModal(null)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {modal === 'visualizar' && (
        <div className="modal">
          <div className="modal-content">
            <h2>Visualizar Laudo</h2>
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
              <b>Status:</b> {laudoAtual.laudostatus}
            </div>
            <div>
              <b>OS Clickup:</b> {laudoAtual.laudoosclickup}
            </div>

            <div>
              <b>Horário de Fechamento:</b>{' '}
              {laudoAtual.laudofechamento
                ? new Date(laudoAtual.laudofechamento).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : 'Sem horário definido'}
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 8,
                marginTop: 16,
              }}
            >
              <button
                style={{ background: '#FFD600' }}
                onClick={() => abrirEditar(laudoAtual as Laudo)}
              >
                Editar
              </button>
              <button
                style={{ background: '#F44336', color: '#fff' }}
                onClick={() => abrirExcluir(laudoAtual as Laudo)}
              >
                Excluir
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
          <div className="modal-content">
            <h2>Confirmar Exclusão</h2>
            <p>Tem certeza que deseja excluir este laudo?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button style={{ background: '#F44336', color: '#fff' }} onClick={excluirLaudoHandler}>
                Sim, Excluir
              </button>
              <button style={{ background: '#aaa', color: '#fff' }} onClick={() => setModal(null)}>
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