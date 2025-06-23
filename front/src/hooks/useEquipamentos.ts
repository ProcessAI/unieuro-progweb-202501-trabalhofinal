import { useState, useEffect } from "react";
import {
  Equipamento,
  getEquipamentos,
  addEquipamento,
  updateEquipamento,
  deleteEquipamento,
} from "@/service/equipamentoService";

export default function useEquipamentos() {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);
  const [busca, setBusca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [novoEquipamento, setNovoEquipamento] = useState<
    Omit<Equipamento, "alugado"> & { alugado: boolean }
  >({
    nome: "",
    serie: "",
    tipo: "",
    alugado: false,
    sede: "",
    modelo: "",
    ipv4: "",
    ipv6: "",
    anydesk: "",
    dw: "",
    mac: "",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getEquipamentos();
      setEquipamentos(data);
    }
    fetchData();
  }, []);

  const filtrados =
    busca.trim() === ""
      ? equipamentos
      : equipamentos.filter((eq) =>
          [eq.nome, eq.serie, eq.tipo, eq.sede]
            .join(" ")
            .toLowerCase()
            .includes(busca.toLowerCase())
        );

  const criar = async () => {
    const e: Equipamento = {
      ...novoEquipamento,
      alugado: novoEquipamento.alugado ? "Sim" : "Não",
    } as Equipamento;
    await addEquipamento(e);
    setEquipamentos(await getEquipamentos());
    setModalOpen(false);
  };

  const iniciarEdicao = (idx: number) => {
    setEditIndex(idx);
    const eq = filtrados[idx];
    setNovoEquipamento({ ...eq, alugado: eq.alugado === "Sim" });
    setModalOpen(true);
  };

  const salvar = async () => {
    if (editIndex !== null) {
      const e: Equipamento = {
        ...novoEquipamento,
        alugado: novoEquipamento.alugado ? "Sim" : "Não",
      } as Equipamento;
      await updateEquipamento(editIndex, e);
      setEquipamentos(await getEquipamentos());
      setModalOpen(false);
      setEditIndex(null);
    }
  };

  const excluir = async (idx: number) => {
    await deleteEquipamento(idx);
    setEquipamentos(await getEquipamentos());
  };

  return {
    filtrados,
    busca,
    setBusca,
    modalOpen,
    setModalOpen,
    novoEquipamento,
    setNovoEquipamento,
    criar,
    iniciarEdicao,
    salvar,
    excluir,
    editIndex,   // <-- adicionado aqui
  };
}
