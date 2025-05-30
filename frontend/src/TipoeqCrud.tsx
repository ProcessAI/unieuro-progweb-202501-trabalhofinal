import React, { useEffect, useState } from 'react';
import { fetchTipoeqs, createTipoeq, updateTipoeq, deleteTipoeq, Tipoeq } from './api';

export function TipoeqCrud() {
  const [tipos, setTipos] = useState<Tipoeq[]>([]);
  const [nome, setNome] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    loadTipos();
  }, []);

  async function loadTipos() {
    const data = await fetchTipoeqs();
    setTipos(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (editId === null) {
      // Criar novo
      await createTipoeq(nome);
    } else {
      // Atualizar
      await updateTipoeq(editId, nome);
      setEditId(null);
    }
    setNome('');
    loadTipos();
  }

  function handleEdit(tipo: Tipoeq) {
    setNome(tipo.tipoeqnome);
    setEditId(tipo.idtipoeq);
  }

  async function handleDelete(id: number) {
    if (window.confirm('Quer mesmo deletar?')) {
      await deleteTipoeq(id);
      loadTipos();
    }
  }

  return (
    <div>
      <h2>Tipos de Equipamento</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do tipo"
          required
        />
        <button type="submit">{editId === null ? 'Criar' : 'Atualizar'}</button>
        {editId !== null && <button onClick={() => { setEditId(null); setNome(''); }}>Cancelar</button>}
      </form>

      <ul>
        {tipos.map((tipo) => (
          <li key={tipo.idtipoeq}>
            {tipo.tipoeqnome}{' '}
            <button onClick={() => handleEdit(tipo)}>Editar</button>{' '}
            <button onClick={() => handleDelete(tipo.idtipoeq)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
