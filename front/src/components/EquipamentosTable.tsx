import React from "react";
import { Button } from "@/components/ui/button";
import { Equipamento } from "@/service/equipamentoService";

interface TableProps {
  filtros: Equipamento[];
  busca: string;
  setBusca: (v: string) => void;
  iniciarEdicao: (i: number) => void;
  excluir: (i: number) => void;
  setModalOpen: (open: boolean) => void;
}

export default function EquipamentosTable({
  filtros,
  busca,
  setBusca,
  iniciarEdicao,
  excluir,
  setModalOpen,
}: TableProps) {
  return (
    <div className="table-container">
      <div className="table-header">
        <input
          placeholder="BUSCAR"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="search-input"
        />
        <Button
          className="new-equipment-btn"
          onClick={() => setModalOpen(true)}
        >
          NOVO EQUIPAMENTO
        </Button>
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
          {filtros.map((eq, idx) => (
            <tr key={idx} className="table-row">
              <td className="table-cell">{eq.nome}</td>
              <td className="table-cell">{eq.serie}</td>
              <td className="table-cell">{eq.tipo}</td>
              <td className="table-cell">{eq.alugado}</td>
              <td className="table-cell">{eq.sede}</td>
              <td className="table-cell table-actions">
                <Button
                  className="details-btn"
                  onClick={() => setModalOpen(true)}
                >
                  DETALHES
                </Button>
                <Button
                  className="edit-btn"
                  onClick={() => iniciarEdicao(idx)}
                >
                  EDITAR
                </Button>
                <Button
                  className="delete-btn"
                  onClick={() => excluir(idx)}
                >
                  EXCLUIR
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

