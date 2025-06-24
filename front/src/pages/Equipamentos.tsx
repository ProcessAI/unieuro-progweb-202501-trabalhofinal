import React, { useState, useEffect } from "react";
import {
  Equipamento,
  getEquipamentos,
  addEquipamento,
  updateEquipamento,
  deleteEquipamento
} from "../service/equipamentoService";

export default function Equipamentos() {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);
  const [busca, setBusca] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [detalhesAbertos, setDetalhesAbertos] = useState(false);
  const [editarAberto, setEditarAberto] = useState(false);

  const [novoEquipamento, setNovoEquipamento] = useState<Equipamento>({
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
    mac: ""
  });

  const [editarEquipamento, setEditarEquipamento] = useState<Equipamento>({
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
    mac: ""
  });

  const [editarIndex, setEditarIndex] = useState<number | null>(null);

  useEffect(() => {
    async function carregarEquipamentos() {
      try {
        const dados = await getEquipamentos();
        setEquipamentos(dados);
      } catch (error) {
        console.error("Erro ao carregar equipamentos:", error);
      }
    }

    carregarEquipamentos();
  }, []);

  const filtrados = busca.trim() === ""
    ? equipamentos
    : equipamentos.filter((eq) =>
        eq.nome.toLowerCase().includes(busca.toLowerCase()) ||
        eq.serie.toLowerCase().includes(busca.toLowerCase()) ||
        eq.tipo.toLowerCase().includes(busca.toLowerCase()) ||
        eq.sede.toLowerCase().includes(busca.toLowerCase())
      );

  const criarEquipamento = async () => {
    try {
      await addEquipamento(novoEquipamento);
      const atualizados = await getEquipamentos();
      setEquipamentos(atualizados);
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
        mac: ""
      });
      alert("Cliente criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar equipamento:", error);
      alert("Erro ao criar equipamento, clique f12 e va no console e veja qual é o error!");
    }
  };

  const excluirEquipamento = async (index: number) => {
    const id = equipamentos[index].id;
    if (!id) return;

    try {
      await deleteEquipamento(id);
      const atualizados = await getEquipamentos();
      setEquipamentos(atualizados);
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
      mac: eq.mac
    });
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
  };

  const salvarEditar = async () => {
    if (editarIndex === null) return;
    const id = equipamentos[editarIndex].id;
    if (!id) return;

    try {
      await updateEquipamento(id, editarEquipamento);
      const atualizados = await getEquipamentos();
      setEquipamentos(atualizados);
      setEditarAberto(false);
      setEditarIndex(null);
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
  };

  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', fontSize: '14px' }}>
      <style>{`
        /* Reset básico */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: #f3f4f6;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          line-height: 1.4;
        }

        /* Header */
        .header {
          background-color: #fbbf24;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 16px;
          font-size: 14px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .logo {
          height: 40px;
        }

        .nav {
          display: flex;
          gap: 16px;
          font-weight: bold;
        }

        .nav a {
          text-decoration: none;
          color: inherit;
        }

        .nav-active {
          color: #000;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-name {
          font-weight: 500;
        }

        .logout-btn {
          background-color: #000;
          color: white;
          font-size: 14px;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        /* Table Container */
        .table-container {
          padding: 16px;
        }

        .table-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .search-input {
          width: 50%;
          font-size: 14px;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
        }

        .new-equipment-btn {
          background-color: #fbbf24;
          color: black;
          font-weight: bold;
          margin-left: 16px;
          font-size: 14px;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        /* Table */
        .equipment-table {
          width: 100%;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          font-size: 14px;
          border-collapse: collapse;
        }

        .table-header-row {
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .table-header-cell {
          padding: 8px;
          font-weight: 600;
        }

        .table-row {
          border-bottom: 1px solid #e5e7eb;
        }

        .table-row:hover {
          background-color: #f9fafb;
        }

        .table-cell {
          padding: 8px;
        }

        .table-actions {
          display: flex;
          gap: 8px;
        }

        .details-btn {
          background-color: #fbbf24;
          font-size: 12px;
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .edit-btn {
          background-color: #000;
          color: white;
          font-size: 12px;
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .delete-btn {
          background-color: #ef4444;
          color: white;
          font-size: 12px;
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Modal Content */
        .modal-content {
          background: white;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          max-height: 90vh;
          overflow-y: auto;
          animation: slideIn 0.3s ease-out;
          position: relative;
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-small {
          width: 90%;
          max-width: 500px;
        }

        .modal-large {
          width: 90%;
          max-width: 800px;
        }

        /* Modal Header */
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 16px;
        }

        .modal-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #6b7280;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }

        .close-btn:hover {
          background-color: #f3f4f6;
          color: #000;
        }

        /* Form Styles */
        .modal-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-label {
          font-size: 12px;
          font-weight: 500;
          color: #374151;
          text-transform: uppercase;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 8px;
          grid-column: span 2;
        }

        .checkbox {
          width: 16px;
          height: 16px;
        }

        .modal-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
        }

        .save-btn {
          background-color: #fbbf24;
          color: black;
          font-weight: bold;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .save-btn:hover {
          background-color: #f59e0b;
        }

        /* Input Styles */
        .input {
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          font-size: 14px;
          transition: border-color 0.2s;
          width: 100%;
        }

        .input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .input::placeholder {
          color: #9ca3af;
        }

        /* Details Table */
        .details-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 16px;
        }

        .details-table th,
        .details-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .details-table th {
          background-color: #f9fafb;
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          color: #374151;
        }

        .details-table td {
          font-size: 14px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            gap: 8px;
            padding: 12px 8px;
          }
          
          .header-left {
            flex-direction: column;
            gap: 8px;
          }
          
          .nav {
            gap: 8px;
          }
          
          .table-header {
            flex-direction: column;
            gap: 12px;
          }
          
          .search-input {
            width: 100%;
          }
          
          .new-equipment-btn {
            margin-left: 0;
            width: 100%;
          }
          
          .equipment-table {
            font-size: 12px;
          }
          
          .table-actions {
            flex-direction: column;
            gap: 4px;
          }
          
          .modal-form {
            grid-template-columns: 1fr;
          }

          .modal-content {
            margin: 16px;
            max-height: calc(100vh - 32px);
          }
        }
      `}</style>

      <header className="header">
        <div className="header-left">
          <img src="/logo.png" alt="Logo" className="logo" />
          <nav className="nav">
            <a href="#">HOME</a>
            <a href="#">CLIENTES</a>
            <a href="#" className="nav-active">EQUIPAMENTOS</a>
            <a href="#">LAUDOS</a>
          </nav>
        </div>
        <div className="header-right">
          <span className="user-name">Rafael Marconi</span>
          <button className="logout-btn">SAIR</button>
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
                <input 
                  className="input" 
                  placeholder="Ex: Gerador Diesel" 
                  value={novoEquipamento.tipo} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, tipo: e.target.value })} 
                />
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
                <label className="form-label">Sede</label>
                <input 
                  className="input" 
                  placeholder="Local da sede" 
                  value={novoEquipamento.sede} 
                  onChange={(e) => setNovoEquipamento({ ...novoEquipamento, sede: e.target.value })} 
                />
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
                <input
                  className="input"
                  placeholder="Ex: Gerador Diesel"
                  value={editarEquipamento.tipo}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, tipo: e.target.value })}
                />
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
                <label className="form-label">Sede</label>
                <input
                  className="input"
                  placeholder="Local da sede"
                  value={editarEquipamento.sede}
                  onChange={(e) => setEditarEquipamento({ ...editarEquipamento, sede: e.target.value })}
                />
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