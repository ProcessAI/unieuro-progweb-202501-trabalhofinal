import React, { useState } from 'react';
import './EquipmentTable.css';

interface TipoEquipamento {
  idtipoeq: number;
  tipoeqnome: string;
}

interface EquipmentTableProps {
  data: TipoEquipamento[];
  filter: string;
}

const EquipmentTable: React.FC<EquipmentTableProps> = ({ data, filter }) => {
  const [tipos, setTipos] = useState<TipoEquipamento[]>(data);

  const handleEdit = (id: number) => {
    // Lógica para editar tipo de equipamento
  };

  const handleDelete = (id: number) => {
    setTipos(tipos.filter(t => t.idtipoeq !== id));
  };

  const handleAdd = () => {
    // Lógica para adicionar novo tipo de equipamento
  };

  return (
    <div>
      <input type="text" placeholder="Buscar tipo de equipamento..." value={filter} />
      <button className="add-button" onClick={handleAdd}>NOVO TIPO</button>
      <table>
        <thead>
          <tr>
            <th>ID Tipo</th>
            <th>Nome do Tipo</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {tipos.map((t: TipoEquipamento) => (
            <tr key={t.idtipoeq}>
              <td>{t.idtipoeq}</td>
              <td>{t.tipoeqnome}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(t.idtipoeq)}>Editar</button>
                <button className="delete-button" onClick={() => handleDelete(t.idtipoeq)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentTable;
