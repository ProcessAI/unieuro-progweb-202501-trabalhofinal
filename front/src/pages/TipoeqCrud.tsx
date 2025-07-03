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
} from '../service/tipoeq-api';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import toast from 'react-hot-toast';
import './TipoeqCrud.css';

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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="bg-gray-100 px-6 py-4 max-w-5xl mx-auto sticky top-[80px] z-40 border-b border-gray-300 flex justify-between items-center">
        <Input
          placeholder="BUSCAR"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-1/3"
        />
      </div>

      <div className="p-6 max-w-5xl mx-auto pt-4">
        <table className="w-full bg-white rounded shadow overflow-hidden">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">ID</th>
              <th className="p-2">Nome</th>
              <th className="p-2 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredTipos.map(t => (
              <tr key={t.idtipoeq} className="border-b hover:bg-gray-50">
                <td className="p-2">{t.idtipoeq}</td>
                <td className="p-2">{t.tipoeqnome}</td>
                <td className="p-2 text-right">
                  <Button
                    className="bg-yellow-400 text-black text-xs h-7 px-3 mr-2"
                    onClick={() => handleEdit(t)}
                  >
                    EDITAR
                  </Button>
                  <Button
                    className="bg-red-600 text-white text-xs h-7 px-3"
                    onClick={() => handleDelete(t.idtipoeq)}
                  >
                    DELETAR
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form
        className="bg-white rounded shadow max-w-5xl mx-auto mt-6 p-6 flex gap-4"
        onSubmit={handleSubmit(onSubmit, () => {
          toast.error('Por favor, corrija os erros antes de enviar.');
        })}
      >
        <div className="input-wrapper">
          <Input
            type="text"
            placeholder="Tipo de Equipamento"
            {...register('tipoeqnome')}
            className={errors.tipoeqnome ? 'input-error' : ''}
          />
          {errors.tipoeqnome && (
            <span className="input-error-message">Somente letras e números</span>
          )}
        </div>
        <Button
          type="submit"
          className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          {isEditing ? 'ATUALIZAR' : 'INSERIR'}
        </Button>
      </form>
    </div>
  );
};

export default TipoeqCrud;
