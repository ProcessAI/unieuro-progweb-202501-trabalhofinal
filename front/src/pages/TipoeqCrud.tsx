import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { tipoEquipamentoSchema } from '../hooks/tipoEquipamentoSchema';
import {
  fetchTipoeqs,
  createTipoeq,
  updateTipoeq,
  deleteTipoeq,
  Tipoeq
} from '../service/tipoeq-api'; // novo nome
import './TipoeqCrud.css';
import toast from 'react-hot-toast';

type TipoEqForm = {
  tipoeqnome: string;
};

const TipoeqCrud: React.FC = () => {
  const [tipos, setTipos] = useState<Tipoeq[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<TipoEqForm>({
    resolver: yupResolver(tipoEquipamentoSchema),
  });

  // Carregar dados do banco ao iniciar
  useEffect(() => {
    async function loadData() {
      const data = await fetchTipoeqs();
      setTipos(data);
    }
    loadData();
  }, []);

  const onSubmit = async (data: TipoEqForm) => {
    if (isEditing && editId !== null) {
      const updated = await updateTipoeq(editId, data.tipoeqnome);
      if (updated) {
        setTipos(tipos.map(t => t.idtipoeq === editId ? updated : t));
        toast.success('Equipamento atualizado com sucesso!');
      } else {
        toast.error('Erro ao atualizar equipamento.');
      }
      setIsEditing(false);
      setEditId(null);
    } else {
      const created = await createTipoeq(data.tipoeqnome);
      if (created) {
        setTipos([...tipos, created]);
        toast.success('Equipamento inserido com sucesso!');
      } else {
        toast.error('Erro ao inserir equipamento.');
      }
    }
    reset();
  };

  const handleEdit = (t: Tipoeq) => {
    setIsEditing(true);
    setEditId(t.idtipoeq);
    setValue('tipoeqnome', t.tipoeqnome);
    toast('Modo edição ativado', { icon: '✏️' });
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
    <div className="container">
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

      <form
        className="form"
        onSubmit={handleSubmit(onSubmit, () => {
          toast.error('Por favor, corrija os erros antes de enviar.');
        })}
      >
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Tipo de Equipamento"
            {...register('tipoeqnome')}
            className={errors.tipoeqnome ? 'input-error' : ''}
          />
          {errors.tipoeqnome && (
            <span className="input-error-message">Somente letras e números</span>
          )}
        </div>

        <button type="submit">{isEditing ? 'ATUALIZAR' : 'INSERIR'}</button>
      </form>
    </div>
  );
};

export default TipoeqCrud;
