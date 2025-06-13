import { useEffect, useState } from 'react';
import { listarClientes } from "../services/clienteService";

type Cliente = {
  idcliente: number;
  nome: string;
};

const ClienteList = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    listarClientes()
      .then((dados) => {
        setClientes(dados);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao carregar clientes.');
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando clientes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.idcliente}>{cliente.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;
