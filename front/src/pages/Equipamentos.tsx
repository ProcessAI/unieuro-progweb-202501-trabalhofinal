import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import {
  Equipamento,
  getEquipamentos,
  addEquipamento,
  updateEquipamento,
  deleteEquipamento
} from "../service/equipamentoService";
import './Equipamentos.css';

// Novos tipos
interface TipoEquipamento {
  idtipoeq: number;
  tipoeqnome: string;
}

interface Cliente {
  clientenome: string,
  clientestatus: number,
  idcliente: number
}

interface Sede {
  idsede: number,
  cliente: Cliente,
  sedenome: string
}
interface EquipamentoExtended extends Equipamento {
  cliente?: string;
}

export default function Equipamentos() {
  const navigate = useNavigate();
  const [equipamentos, setEquipamentos] = useState<EquipamentoExtended[]>([]);
  const [tiposEquipamento, setTiposEquipamento] = useState<TipoEquipamento[]>([]);
  const [sedes, setSedes] = useState<Sede[]>([]);
  const [sedesFiltradas, setSedesFiltradas] = useState<Sede[]>([]);

  const [busca, setBusca] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [detalhesAbertos, setDetalhesAbertos] = useState(false);
  const [editarAberto, setEditarAberto] = useState(false);

  const [novoEquipamento, setNovoEquipamento] = useState<EquipamentoExtended>({
    nome: "",
    serie: "",
    tipo: "",
    alugado: "Não",
    sede: "",
    modelo: "",
    ipv4: "",
    ipv6: "",
    anydesk: "",
    dw: "",
    mac: "",
    cliente: ""
  });

  const [editarEquipamento, setEditarEquipamento] = useState<EquipamentoExtended>({
    nome: "",
    serie: "",
    tipo: "",
    alugado: "Não",
    sede: "",
    modelo: "",
    ipv4: "",
    ipv6: "",
    anydesk: "",
    dw: "",
    mac: "",
    cliente: ""
  });

  const [clienteSelecionado, setClienteSelecionado] = useState<string>("");
  const [clienteSelecionadoEditar, setClienteSelecionadoEditar] = useState<string>("");
  const [editarIndex, setEditarIndex] = useState<number | null>(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        const [dadosEquip, dadosTipos, dadosSedes] = await Promise.all([
          getEquipamentos(),
          fetch("https://laudinho.cleversystems.net/api/tipoeq/listarTipoEquipamento").then(res => res.json()),
          fetch("https://laudinho.cleversystems.net/api/sede").then(res => res.json())
        ]);
        
        const equipamentosComCliente = dadosEquip.map((eq: Equipamento) => {
          const sede = dadosSedes.find((s: Sede) => s.sedenome === eq.sede);
          return {
            ...eq,
            cliente: sede ? sede.cliente.clientenome : ""
          };
        });
        
        setEquipamentos(equipamentosComCliente);
        setTiposEquipamento(dadosTipos);
        setSedes(dadosSedes);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    carregarDados();
  }, []);

  useEffect(() => {
    if (clienteSelecionado) {
      const sedesDoCliente = sedes.filter(sede => 
        sede.cliente.clientenome === clienteSelecionado
      );
      setSedesFiltradas(sedesDoCliente);
    } else {
      setSedesFiltradas([]);
    }
  }, [clienteSelecionado, sedes]);

  useEffect(() => {
    if (clienteSelecionadoEditar) {
      const sedesDoCliente = sedes.filter(sede => 
        sede.cliente.clientenome === clienteSelecionadoEditar
      );
      setSedesFiltradas(sedesDoCliente);
    }
  }, [clienteSelecionadoEditar, sedes]);

  const clientesUnicos = Array.from(
    new Set(sedes.map(sede => sede.cliente.clientenome))
  ).sort();

  const filtrados = busca.trim() === ""
    ? equipamentos
    : equipamentos.filter((eq) =>
        eq.nome.toLowerCase().includes(busca.toLowerCase()) ||
        eq.serie.toLowerCase().includes(busca.toLowerCase()) ||
        eq.tipo.toLowerCase().includes(busca.toLowerCase()) ||
        eq.sede.toLowerCase().includes(busca.toLowerCase()) ||
        (eq.cliente && eq.cliente.toLowerCase().includes(busca.toLowerCase()))
      );

  const criarEquipamento = async () => {
    try {
      await addEquipamento(novoEquipamento);
      const atualizados = await getEquipamentos();
      const equipamentosComCliente = atualizados.map((eq: Equipamento) => {
        const sede = sedes.find((s: Sede) => s.sedenome === eq.sede);
        return {
          ...eq,
          cliente: sede ? sede.cliente.clientenome : ""
        };
      });
      
      setEquipamentos(equipamentosComCliente);
      setModalAberto(false);
      setNovoEquipamento({
        nome: "",
        serie: "",
        tipo: "",
        alugado: "Não",
        sede: "",
        modelo: "",
        ipv4: "",
        ipv6: "",
        anydesk: "",
        dw: "",
        mac: "",
        cliente: ""
      });
      setClienteSelecionado("");
      alert("Equipamento criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar equipamento:", error);
      alert("Preencha os dados para poder cadastrar o equipamento!");
    }
  };

  const excluirEquipamento = async (index: number) => {
    const id = equipamentos[index].id;
    if (!id) return;

    try {
      await deleteEquipamento(id);
      const atualizados = await getEquipamentos();
      const equipamentosComCliente = atualizados.map((eq: Equipamento) => {
        const sede = sedes.find((s: Sede) => s.sedenome === eq.sede);
        return {
          ...eq,
          cliente: sede ? sede.cliente.clientenome : ""
        };
      });
      
      setEquipamentos(equipamentosComCliente);
      alert("Equipamento Excluido com Sucesso");
    } catch (error) {
      console.error("Erro ao excluir equipamento:", error);
      alert("Erro ao excluir equipamento, clique f12 e va no console e veja qual é o error!");
    }
  };

  const abrirEditar = (index: number) => {
    setEditarIndex(index);
    const eq = equipamentos[index];
    setEditarEquipamento({
      nome: eq.nome,
      serie: eq.serie,
      tipo: eq.tipo,
      alugado: eq.alugado,
      sede: eq.sede,
      modelo: eq.modelo,
      ipv4: eq.ipv4,
      ipv6: eq.ipv6,
      anydesk: eq.anydesk,
      dw: eq.dw,
      mac: eq.mac,
      cliente: eq.cliente || ""
    });
    setClienteSelecionadoEditar(eq.cliente || "");
    setEditarAberto(true);
    setModalAberto(false);
    setDetalhesAbertos(false);
  };

  const abrirDetalhes = (index: number) => {
    setEditarIndex(index);
    setDetalhesAbertos(true);
    setModalAberto(false);
    setEditarAberto(false);
  };

  const abrirNovoEquipamento = () => {
    setModalAberto(true);
    setDetalhesAbertos(false);
    setEditarAberto(false);
    setClienteSelecionado("");
    setSedesFiltradas([]);
  };

  const salvarEditar = async () => {
    if (editarIndex === null) return;
    const id = equipamentos[editarIndex].id;
    if (!id) return;

    try {
      await updateEquipamento(id, editarEquipamento);
      const atualizados = await getEquipamentos();
      
      // Enhance with cliente info
      const equipamentosComCliente = atualizados.map((eq: Equipamento) => {
        const sede = sedes.find((s: Sede) => s.sedenome === eq.sede);
        return {
          ...eq,
          cliente: sede ? sede.cliente.clientenome : ""
        };
      });
      
      setEquipamentos(equipamentosComCliente);
      setEditarAberto(false);
      setEditarIndex(null);
      setClienteSelecionadoEditar("");
      alert("Equipamento atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar equipamento:", error);
      alert("Erro ao atualizar equipamento, clique f12 e va no console e veja qual é o error!");
    }
  };

  const fecharModais = () => {
    setModalAberto(false);
    setDetalhesAbertos(false);
    setEditarAberto(false);
    setClienteSelecionado("");
    setClienteSelecionadoEditar("");
    setSedesFiltradas([]);
  };

  const handleClienteChange = (clienteNome: string) => {
    setClienteSelecionado(clienteNome);
    setNovoEquipamento({ ...novoEquipamento, sede: "", cliente: clienteNome });
  };

  const handleClienteEditarChange = (clienteNome: string) => {
    setClienteSelecionadoEditar(clienteNome);
    setEditarEquipamento({ ...editarEquipamento, sede: "", cliente: clienteNome });
  };

  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', fontSize: '14px' }}>
      <header className="header">
        <div className="header-left">
          <img src="/logo.png" alt="Logo" className="logo" />
          <nav className="nav">
            <a href="/clientes">HOME</a>
            <a href="/clientes">CLIENTES</a>
            <a href="/tipoeq">TIPO EQUIPAMENTO</a>
            <a href="/tipoinstalacao">TIPO INSTALAÇÃO</a>
            <a href="/tipolaudo">TIPO LAUDO</a>
            <a href="/equipamentos" className="nav-active">EQUIPAMENTOS</a>
            <a href="/laudo">LAUDOS</a>
          </nav>
        </div>
        <div className="header-right">
          <button
            className="logout-btn"
            onClick={() => navigate('/login')}
          >
            SAIR
          </button>
        </div>
      </header>
      <div className="table-container">
        <div className="table-header">
          <input
            type="text"
            placeholder="BUSCAR"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="search-input"
          />
          <button
            className="new-equipment-btn"
            onClick={abrirNovoEquipamento}
          >
            NOVO EQUIPAMENTO
          </button>
        </div>

        <table className="equipment-table">
          <thead>
            <tr className="table-header-row">
              <th className="table-header-cell">Nome</th>
              <th className="table-header-cell">Série</th>
              <th className="table-header-cell">Tipo</th>
              <th className="table-header-cell">Alugado</th>
              <th className="table-header-cell">Cliente</th>
              <th className="table-header-cell">Sede</th>
              <th className="table-header-cell">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((eq, idx) => (
              <tr key={idx} className="table-row">
                <td className="table-cell">{eq.nome}</td>
                <td className="table-cell">{eq.serie}</td>
                <td className="table-cell">{eq.tipo}</td>
                <td className="table-cell">{eq.alugado}</td>
                <td className="table-cell">{eq.cliente}</td>
                <td className="table-cell">{eq.sede}</td>
                <td className="table-cell">
                  <div className="table-actions">
                    <button className="details-btn" onClick={() => abrirDetalhes(idx)}>DETALHES</button>
                    <button className="edit-btn" onClick={() => abrirEditar(idx)}>EDITAR</button>
                    <button className="delete-btn" onClick={() => excluirEquipamento(idx)}>EXCLUIR</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Novo Equipamento */}
      {modalAberto && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && fecharModais()}>
          <div className="modal-content modal-small">
            <div className="modal-header">
              <h2 className="modal-title">Novo Equipamento</h2>
              <button className="close-btn" onClick={fecharModais}>×</button>
            </div>
            <div className="modal-form">
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input 
                  className="input" 
                  placeholder="Nome do equipamento" 
                  value={novoEquipamento.nome} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, nome: e.target.value })} 
                />
              </div>
              <div className="form-group">
                <label className="form-label">IPv4</label>
                <input 
                  className="input" 
                  placeholder="192.168.1.1" 
                  value={novoEquipamento.ipv4} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, ipv4: e.target.value })} 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Série</label>
                <input 
                  className="input" 
                  placeholder="Número de série" 
                  value={novoEquipamento.serie} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, serie: e.target.value })} 
                />
              </div>
              <div className="form-group">
                <label className="form-label">IPv6</label>
                <input 
                  className="input" 
                  placeholder="::1" 
                  value={novoEquipamento.ipv6} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, ipv6: e.target.value })} 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tipo de Equipamento</label>
                <select
                  className="input"
                  value={novoEquipamento.tipo}
                  onChange={(e) =>
                    setNovoEquipamento({ ...novoEquipamento, tipo: e.target.value })
                  }
                >
                  <option value="">Selecione o tipo</option>
                  {tiposEquipamento.map((tipo) => (
                    <option key={tipo.idtipoeq} value={tipo.tipoeqnome}>
                      {tipo.tipoeqnome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">AnyDesk</label>
                <input 
                  className="input" 
                  placeholder="123 456 789" 
                  value={novoEquipamento.anydesk} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, anydesk: e.target.value })} 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Modelo</label>
                <input 
                  className="input" 
                  placeholder="Modelo do equipamento" 
                  value={novoEquipamento.modelo} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, modelo: e.target.value })} 
                />
              </div>
              <div className="form-group">
                <label className="form-label">DW</label>
                <input 
                  className="input" 
                  placeholder="01/01/2023" 
                  value={novoEquipamento.dw} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, dw: e.target.value })} 
                />
              </div>
              <div className="form-group">
                <label className="form-label">MAC</label>
                <input 
                  className="input" 
                  placeholder="AA:BB:CC:DD:EE:FF" 
                  value={novoEquipamento.mac} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, mac: e.target.value })} 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Cliente</label>
                <select
                  className="input"
                  value={clienteSelecionado}
                  onChange={(e) => handleClienteChange(e.target.value)}
                >
                  <option value="">Selecione o cliente</option>
                  {clientesUnicos.map((clienteNome) => (
                    <option key={clienteNome} value={clienteNome}>
                      {clienteNome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Sede</label>
                <select
                  className="input"
                  value={novoEquipamento.sede}
                  onChange={(e) =>
                    setNovoEquipamento({ ...novoEquipamento, sede: e.target.value })
                  }
                  disabled={!clienteSelecionado}
                >
                  <option value="">
                    {!clienteSelecionado ? "Primeiro selecione um cliente" : "Selecione a sede"}
                  </option>
                  {sedesFiltradas.map((sede) => (
                    <option key={sede.idsede} value={sede.sedenome}>
                      {sede.sedenome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="checkbox-container">
                <input 
                  type="checkbox" 
                  id="alugado" 
                  className="checkbox"
                  checked={novoEquipamento.alugado === "Sim"}
                  onChange={(e) =>
                    setNovoEquipamento({
                      ...novoEquipamento,
                      alugado: e.target.checked ? "Sim" : "Não"
                    })
                  }
                />
                <label htmlFor="alugado" className="form-label">ALUGADO</label>
              </div>
            </div>
            <div className="modal-actions">
              <button className="save-btn" onClick={criarEquipamento}>CRIAR EQUIPAMENTO</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detalhes */}
      {detalhesAbertos && editarIndex !== null && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && fecharModais()}>
          <div className="modal-content modal-large">
            <div className="modal-header">
              <h2 className="modal-title">Detalhes do Equipamento</h2>
              <button className="close-btn" onClick={fecharModais}>×</button>
            </div>
            <table className="details-table">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Modelo</th>
                  <th>MAC</th>
                  <th>IPv4</th>
                  <th>IPv6</th>
                  <th>AnyDesk</th>
                  <th>DW</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{equipamentos[editarIndex].cliente}</td>
                  <td>{equipamentos[editarIndex].modelo}</td>
                  <td>{equipamentos[editarIndex].mac}</td>
                  <td>{equipamentos[editarIndex].ipv4}</td>
                  <td>{equipamentos[editarIndex].ipv6}</td>
                  <td>{equipamentos[editarIndex].anydesk}</td>
                  <td>{equipamentos[editarIndex].dw}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Editar Equipamento */}
      {editarAberto && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && fecharModais()}>
          <div className="modal-content modal-small">
            <div className="modal-header">
              <h2 className="modal-title">Editar Equipamento</h2>
              <button className="close-btn" onClick={fecharModais}>×</button>
            </div>
            <div className="modal-form">
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input
                  className="input"
                  placeholder="Nome do equipamento"
                  value={editarEquipamento.nome}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, nome: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">IPv4</label>
                <input
                  className="input"
                  placeholder="192.168.1.1"
                  value={editarEquipamento.ipv4}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, ipv4: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Série</label>
                <input
                  className="input"
                  placeholder="Número de série"
                  value={editarEquipamento.serie}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, serie: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">IPv6</label>
                <input
                  className="input"
                  placeholder="::1"
                  value={editarEquipamento.ipv6}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, ipv6: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tipo de Equipamento</label>
                <select
                  className="input"
                  value={editarEquipamento.tipo}
                  onChange={(e) =>
                    setEditarEquipamento({ ...editarEquipamento, tipo: e.target.value })
                  }
                >
                  <option value="">Selecione o tipo</option>
                  {tiposEquipamento.map((tipo) => (
                    <option key={tipo.idtipoeq} value={tipo.tipoeqnome}>
                      {tipo.tipoeqnome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">AnyDesk</label>
                <input
                  className="input"
                  placeholder="123 456 789"
                  value={editarEquipamento.anydesk}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, anydesk: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Modelo</label>
                <input
                  className="input"
                  placeholder="Modelo do equipamento"
                  value={editarEquipamento.modelo}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, modelo: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">DW</label>
                <input
                  className="input"
                  placeholder="01/01/2023"
                  value={editarEquipamento.dw}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, dw: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">MAC</label>
                <input
                  className="input"
                  placeholder="AA:BB:CC:DD:EE:FF"
                  value={editarEquipamento.mac}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, mac: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Cliente</label>
                <select
                  className="input"
                  value={clienteSelecionadoEditar}
                  onChange={(e) => handleClienteEditarChange(e.target.value)}
                >
                  <option value="">Selecione o cliente</option>
                  {clientesUnicos.map((clienteNome) => (
                    <option key={clienteNome} value={clienteNome}>
                      {clienteNome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Sede</label>
                <select
                  className="input"
                  value={editarEquipamento.sede}
                  onChange={(e) =>
                    setEditarEquipamento({ ...editarEquipamento, sede: e.target.value })
                  }
                  disabled={!clienteSelecionadoEditar}
                >
                  <option value="">
                    {!clienteSelecionadoEditar ? "Primeiro selecione um cliente" : "Selecione a sede"}
                  </option>
                  {sedesFiltradas.map((sede) => (
                    <option key={sede.idsede} value={sede.sedenome}>
                      {sede.sedenome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="alugado-editar"
                  className="checkbox"
                  checked={editarEquipamento.alugado === "Sim"}
                  onChange={(e) =>
                    setEditarEquipamento({
                      ...editarEquipamento,
                      alugado: e.target.checked ? "Sim" : "Não"
                    })
                  }
                />
                <label htmlFor="alugado-editar" className="form-label">ALUGADO</label>
              </div>
            </div>
            <div className="modal-actions">
              <button className="save-btn" onClick={salvarEditar}>SALVAR ALTERAÇÕES</button>
              <button className="delete-btn" onClick={() => {
                if (editarIndex !== null) excluirEquipamento(editarIndex);
                setEditarAberto(false);
                setEditarIndex(null);
              }}>EXCLUIR EQUIPAMENTO</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}