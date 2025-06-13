import api from './Cliente-Api'; // importação correta


// colocando a listagem para listar todos os clientes
export const listarClientes = async () => {
  const response = await api.get('/cliente/listarCliente'); // API GET
  
  console.log(response.data)
  return response.data;
};
