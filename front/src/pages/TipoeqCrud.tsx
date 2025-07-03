import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { tipoEquipamentoSchema } from '../hooks/tipoEquipamentoSchema';
import {
  fetchTipoeqs,
  createTipoeq,
  updateTipoeq,
  deleteTipoeq,
  Tipoeq
} from '../service/tipoeq-api';
import './TipoeqCrud.css';
import toast from 'react-hot-toast';
import Navbar from '@/components/Navbar';

const TipoeqCrud: React.FC = () => {
  const navigate = useNavigate();
  const [tipos, setTipos] = useState<Tipoeq[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(tipoEquipamentoSchema),
  });

  useEffect(() => {
    async function loadData() {
      const data = await fetchTipoeqs();
      setTipos(data);
    }
    loadData();
  }, []);

  const onSubmit = async (data: { tipoeqnome: string }) => {
    if (isEditing && editId !== null) {
      const updated = await updateTipoeq(editId, data.tipoeqnome);
      if (updated) {
        setTipos(tipos.map(t => t.idtipoeq === editId ? updated : t));
        toast.success('Equipamento atualizado com sucesso!');
      } else {
        toast.error('Erro ao atualizar equipamento.');
      }
    } else {
      const created = await createTipoeq(data.tipoeqnome);
      if (created) {
        setTipos([...tipos, created]);
        toast.success('Equipamento inserido com sucesso!');
      } else {
        toast.error('Erro ao inserir equipamento.');
      }
    }
    setIsEditing(false);
    setEditId(null);
    reset();
    setShowModal(false);
  };

  const handleEdit = (t: Tipoeq) => {
    setIsEditing(true);
    setEditId(t.idtipoeq);
    setValue('tipoeqnome', t.tipoeqnome);
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    const success = await deleteTipoeq(id);
    if (success) {
      setTipos(tipos.filter(t => t.idtipoeq !== id));
      toast.success('Equipamento deletado com sucesso!');
    } else {
      toast.error('Erro ao deletar equipamento.');
    }
  };

  const filteredTipos = tipos.filter(t =>
    t.tipoeqnome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <><Navbar /><div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <input
          type="text"
          className="search"
          placeholder="BUSCAR"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="btn-novo" onClick={() => { reset(); setIsEditing(false); setShowModal(true); }}>
          Novo Tipo de Equipamento
        </button>
      </div>

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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isEditing ? 'Editar Tipo de Equipamento' : 'Novo Tipo de Equipamento'}</h2>
            <form
              className="modal-form"
              onSubmit={handleSubmit(onSubmit, () => toast.error('Corrija os erros antes de enviar.'))}
            >
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Tipo de Equipamento"
                  {...register('tipoeqnome')}
                  className={errors.tipoeqnome ? 'input-error' : ''} />
                {errors.tipoeqnome && (
                  <span className="input-error-message">Somente letras e números</span>
                )}
              </div>
              <button type="submit">{isEditing ? 'ATUALIZAR' : 'INSERIR'}</button>
              <button type="button" onClick={() => setShowModal(false)} style={{ background: '#ccc' }}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div></>
  );
};

export default TipoeqCrud;
