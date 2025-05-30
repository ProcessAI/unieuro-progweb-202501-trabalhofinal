import React, { useState, useEffect } from 'react';
import './TipoeqCrud.css';

interface TipoEq {
  idtipoeq: number;
  tipoeqnome: string;
}

const TipoeqCrud: React.FC = () => {
  const [tipos, setTipos] = useState<TipoEq[]>([]);
  const [form, setForm] = useState<TipoEq>({ idtipoeq: 0, tipoeqnome: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Novo estado para busca

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isEditing) {
      setTipos(tipos.map(t => t.idtipoeq === form.idtipoeq ? form : t));
    } else {
      setTipos([...tipos, { ...form, idtipoeq: Date.now() }]);
    }
    setForm({ idtipoeq: 0, tipoeqnome: '' });
    setIsEditing(false);
  };

  const handleEdit = (t: TipoEq) => {
    setForm(t);
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    setTipos(tipos.filter(t => t.idtipoeq !== id));
  };

  // Filtrar lista com base na busca
  const filteredTipos = tipos.filter(t =>
    t.tipoeqnome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <div className="logo">LOGO</div>
        <nav>
          <a>HOME</a>
          <a>CLIENTES</a>
          <a>EQUIPAMENTOS</a>
        </nav>
        <div className="profile">
          Rafael Marconi <button>SAIR</button>
        </div>
      </header>

      <div className="content">
        <input
          type="text"
          className="search"
          placeholder="BUSCAR"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredTipos.map(t => (
              <tr key={t.idtipoeq}>
                <td>{t.idtipoeq}</td>
                <td>{t.tipoeqnome}</td>
                <td>
                  <button onClick={() => handleEdit(t)}>EDITAR</button>
                  <button onClick={() => handleDelete(t.idtipoeq)}>DELETAR</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="form">
          <input
            type="text"
            name="tipoeqnome"
            value={form.tipoeqnome}
            placeholder="Tipo de Equipamento"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>{isEditing ? 'ATUALIZAR' : 'INSERIR'}</button>
        </div>
      </div>
    </div>
  );
};

export default TipoeqCrud;
