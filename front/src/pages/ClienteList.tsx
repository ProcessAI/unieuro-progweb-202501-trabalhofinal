import { useEffect, useState } from 'react';
import { listarClientes } from '../services/clienteService';

type Cliente = {
  idcliente: number;
  nome: string;
};

const ClienteList = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    listarClientes().then(setClientes).catch(console.error);
  }, []);

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
