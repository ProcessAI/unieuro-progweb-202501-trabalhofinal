import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './laudos.css';
import Markdown from '../components/Markdown';
import {
  listarLaudos,
  criarLaudo,
  atualizarLaudo,
  deletarLaudo,
  Laudo,
  LaudoWithImages
} from '../service/laudos-api';
import Navbar from '@/components/Navbar';

interface TipoInstalacao {
  idtipoinstalacao: number;
  tipoinstalacaonome: string;
}

interface TipoLaudo {
  idtipolaudo: number;
  tipolaudonome: string;
  tipolaudotemplate?: string;
}

const laudoVazio: Omit<LaudoWithImages, 'idlaudo' | 'laudodatainclusao'> = {
  laudodescricao: '',
  laudohtmlmd: '',
  idtipolaudo: 0,
  idtipoinstalacao: 0,
  laudoosclickup: '',
  laudofechamento: '',
  laudostatus: 0,
  imagens: {}
};

const Laudos: React.FC = () => {
  const navigate = useNavigate();
  const [laudos, setLaudos] = useState<LaudoWithImages[]>([]);
  const [busca, setBusca] = useState('');
  const [modal, setModal] = useState<'novo' | 'editar' | 'visualizar' | 'excluir' | null>(null);
  const [pagina, setPagina] = useState(1);
  const [laudoAtual, setLaudoAtual] = useState<
    LaudoWithImages | Omit<LaudoWithImages, 'idlaudo' | 'laudodatainclusao'>
  >(laudoVazio);

  // Estado para armazenar os tipos carregados do backend
  const [tiposInstalacao, setTiposInstalacao] = useState<TipoInstalacao[]>([]);
  const [tiposLaudo, setTiposLaudo] = useState<TipoLaudo[]>([]);
  const [errors, setErrors] = useState<{
    descricao?: string; osClickup?: string;
    tipoLaudo?: string; tipoInstalacao?: string; status?: string
  }>({});


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
    setPagina(1)
    setModal('novo');
  };
  const abrirEditar = (laudo: LaudoWithImages) => {
    if (laudo.laudostatus === 3) {
      alert("Este laudo está finalizado e não pode mais ser editado.");
      return;
    }

    setLaudoAtual(laudo);
    setPagina(1);
    setModal("editar");
  };
  const abrirVisualizar = (laudo: LaudoWithImages) => {
    setLaudoAtual(laudo);
    setModal('visualizar');
  };
  const abrirExcluir = (laudo: LaudoWithImages) => {
    setLaudoAtual(laudo);
    setModal('excluir');
  };

  // Referência para o componente Markdown para acessar o estado interno
  const markdownRef = useRef<any>(null);

  // Função para atualizar o markdown em tempo real
  const handleMarkdownChange = (conteudo: string) => {
    setLaudoAtual(prev => ({
      ...prev,
      laudohtmlmd: conteudo
    }));
  };

  // Função para salvar o markdown e imagens automaticamente
  const handleMarkdownSave = (conteudo: string, imagens: Record<string, string>) => {
    setLaudoAtual(prev => ({
      ...prev,
      laudohtmlmd: conteudo,
      imagens: imagens
    }));
    console.log('Markdown salvo automaticamente:', { conteudo, imagens });
  };

  // Função para forçar a sincronização do markdown antes de salvar
  const sincronizarMarkdown = () => {
    if (markdownRef.current) {
      const { markdown, imagens } = markdownRef.current.getEstadoAtual();
      setLaudoAtual(prev => ({
        ...prev,
        laudohtmlmd: markdown,
        imagens: imagens
      }));
      return { markdown, imagens };
    }
    return null;
  };

  const criarLaudoHandler = async () => {
    try {
      // Sincroniza o markdown antes de salvar
      sincronizarMarkdown();

      const { idtipolaudo, idtipoinstalacao, laudostatus, laudodescricao, laudoosclickup } = laudoAtual;
      const novosErros: typeof errors = {};

      if (!laudodescricao.trim()) {
        novosErros.descricao = "A descrição é obrigatória.";
      }

      if (!laudoosclickup?.trim()) {
        novosErros.osClickup = "O campo OS Clickup é obrigatório.";
      }

      if (!idtipolaudo || idtipolaudo === 0) {
        novosErros.tipoLaudo = "Selecione um tipo de laudo válido.";
      }

      if (!idtipoinstalacao || idtipoinstalacao === 0) {
        novosErros.tipoInstalacao = "Selecione um tipo de instalação válido.";
      }

      if (Object.keys(novosErros).length > 0) {
        setErrors(novosErros);
        return;
      }

      setErrors({}); // limpa os erros anteriores

      const novo = await criarLaudo({
        ...laudoAtual,
        laudostatus: 2, // Em andamento
      });


      setLaudos([...laudos, novo]);
      setModal(null);
    } catch (err) {
      console.error("Erro ao criar laudo:", err);
    }
  };

  const atualizarLaudoHandler = async () => {
    try {
      if (!('idlaudo' in laudoAtual)) return;

      // Sincroniza o markdown antes de salvar
      sincronizarMarkdown();

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

      if (!laudoAtual.laudoosclickup?.trim()) {
        novosErros.osClickup = "O campo OS Clickup é obrigatório.";
      }

      if (laudoAtual.laudoosclickup && laudoAtual.laudoosclickup.length > 10) {
        novosErros.osClickup = "O campo OS deve ter no máximo 10 caracteres.";
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

  const laudoFinalizado = modal === 'editar' && laudoAtual.laudostatus === 3;
  const laudosFiltrados = laudos.filter((laudo) =>
    laudo.laudodescricao?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div
        className="top-bar"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 16 }}
      >
        <input
          placeholder="BUSCAR"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{ width: 200, padding: 8 }}
        />
        <button
          className="novo-laudo-btn"
          style={{ background: '#FFD600', padding: '8px 16px', borderRadius: 6, fontWeight: 'bold' }}
          onClick={abrirNovo}
        >
          + Novo Laudo
        </button>
      </div>

      <div className="laudos-grid">
        <div className="laudo-header">
          <div>Descrição</div>
          <div>Tipo</div>
          <div>Status</div>
          <div>OS</div>
        </div>

        {laudosFiltrados.map((laudo) => (
          <div key={laudo.idlaudo} className="laudo-row" onClick={() => abrirVisualizar(laudo)}>
            <div data-label="Descrição">{laudo.laudodescricao}</div>
            <div data-label="Tipo">
              {tiposLaudo.find((t) => t.idtipolaudo === laudo.idtipolaudo)?.tipolaudonome || laudo.idtipolaudo}
            </div>
            <div data-label="Status">{laudo.laudostatus}</div>
            <div data-label="OS">{laudo.laudoosclickup}</div>
          </div>
        ))}
      </div>


      {(modal === 'novo' || modal === 'editar') && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modal === 'novo' ? 'Novo Laudo Técnico' : 'Editar Laudo'}</h2>

            {/* Página 1 - Dados Iniciais */}
            {pagina === 1 && (
              <>
                <div className="input-wrapper">
                  <input
                    placeholder="Descrição"
                    disabled={laudoFinalizado}
                    className={errors.descricao ? 'input-error' : ''}
                    value={laudoAtual.laudodescricao || ''}
                    onChange={(e) =>
                      setLaudoAtual({ ...laudoAtual, laudodescricao: e.target.value } as any)
                    }
                  />
                  {errors.descricao && <span className="input-error-message">{errors.descricao}</span>}
                </div>

                <div className="input-wrapper">
                  <select
                    disabled={laudoFinalizado}
                    className={errors.tipoLaudo ? 'input-error' : ''}
                    value={laudoAtual.idtipolaudo || 0}
                    onChange={(e) => {
                      const idSelecionado = Number(e.target.value);
                      const tipoSelecionado = tiposLaudo.find((t) => t.idtipolaudo === idSelecionado);

                      setLaudoAtual((prev) => ({
                        ...prev,
                        idtipolaudo: idSelecionado,
                        // Preenche o markdown SÓ se for novo
                        laudohtmlmd:
                          modal === 'novo' && tipoSelecionado?.tipolaudotemplate
                            ? tipoSelecionado.tipolaudotemplate
                            : prev.laudohtmlmd,
                      }));
                    }}
                  >
                    <option value={0}>Tipo de Laudo</option>
                    {tiposLaudo.map((tipo) => (
                      <option key={tipo.idtipolaudo} value={tipo.idtipolaudo}>
                        {tipo.tipolaudonome}
                      </option>
                    ))}
                  </select>
                  {errors.tipoLaudo && <span className="input-error-message">{errors.tipoLaudo}</span>}
                </div>

                <div className="input-wrapper">
                  <select
                    disabled={laudoFinalizado}
                    className={errors.tipoInstalacao ? 'input-error' : ''}
                    value={laudoAtual.idtipoinstalacao || 0}
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

                {modal === 'editar' && (
                  <div className="input-wrapper">
                    <select
                      className={errors.status ? 'input-error' : ''}
                      value={laudoAtual.laudostatus || 2}
                      onChange={(e) =>
                        setLaudoAtual({ ...laudoAtual, laudostatus: Number(e.target.value) } as any)
                      }
                    >
                      <option value={0}>Status</option>
                      <option value={1}>Pendente</option>
                      <option value={2}>Em andamento</option>
                      <option value={3}>Finalizado</option>
                    </select>
                    {errors.status && <span className="input-error-message">{errors.status}</span>}
                  </div>
                )}

                <div className="input-wrapper">
                  <input
                    placeholder="OS Clickup"
                    disabled={laudoFinalizado}
                    maxLength={10}
                    className={errors.osClickup ? 'input-error' : ''}
                    value={laudoAtual.laudoosclickup || ''}
                    onChange={(e) =>
                      setLaudoAtual({ ...laudoAtual, laudoosclickup: e.target.value } as any)
                    }
                  />
                  {errors.osClickup && (
                    <span className="input-error-message">{errors.osClickup}</span>
                  )}
                </div>


              </>
            )}

            {/* Página 2 - Markdown */}
            {pagina === 2 && (
              <>
                <input
                  style={{ display: 'none' }}
                  value={laudoAtual.laudohtmlmd || ''}
                  onChange={(e) =>
                    setLaudoAtual({ ...laudoAtual, laudohtmlmd: e.target.value } as any)
                  }
                />
                {laudoFinalizado ? (
                  <div style={{ border: '1px solid #ccc', padding: 10, borderRadius: 6, marginTop: 8 }}>
                    <Markdown value={laudoAtual.laudohtmlmd || ''} />
                  </div>
                ) : (
                  <Markdown
                    value={laudoAtual.laudohtmlmd || ''}
                    onChange={(value) =>
                      setLaudoAtual({ ...laudoAtual, laudohtmlmd: value } as any)
                    }
                  />
                )}
              </>
            )}

            {/* Botões de navegação e ação */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
              <div>
                {pagina > 1 && (
                  <button style={{ marginRight: 8, backgroundColor: '#FFD600' }} onClick={() => setPagina(pagina - 1)}>
                    Voltar
                  </button>
                )}
                {pagina < 2 && (
                  <button style={{ backgroundColor: '#FFD600' }} onClick={() => setPagina(pagina + 1)}>
                    Próximo
                  </button>
                )}
                {pagina < 2 && (
                  <button style={{ background: '#aaa', color: '#fff', marginLeft: '10px' }} onClick={() => setModal(null)}>
                    Cancelar
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                {pagina === 2 && (
                  <>
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
                  </>
                )}
              </div>
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
                <Markdown
                  value={laudoAtual.laudohtmlmd}
                  mode="somente-leitura"
                />
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
                onClick={() => abrirEditar(laudoAtual as LaudoWithImages)}
              >
                Editar
              </button>
              <button
                style={{ background: '#F44336', color: '#fff' }}
                onClick={() => abrirExcluir(laudoAtual as LaudoWithImages)}
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
          <div className="modal-content modal-excluir">
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