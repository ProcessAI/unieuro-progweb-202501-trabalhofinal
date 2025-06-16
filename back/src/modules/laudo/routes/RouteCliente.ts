/* importando a classe Router do express e Classes de requisição e resposta do express */
import {Request,Response, Router} from 'express';

/* importando a classe ClienteService da camada service*/
import {ClienteService} from '../service/ClienteService'

// Materializando um objeto Router da class Router do express
const routeCliente:Router = Router();

// Materializando um objeto ClienteService da class ClienteService
const clientes:ClienteService = new ClienteService();

// Criar um novo cliente
routeCliente.post("/criarCliente", async(req:Request,res:Response) => {

  try{

    const {nome, status } = req.body;

    // Validar se 'status' é uma string antes de tentar a conversão

    if (typeof status !== 'string') {
      return res.status(400).json({ error: "O status deve ser uma string." });
    }

    // Converte o status de string para numérico
    // Se status for 'Ativo', statusNumerico será 1.
    // Se status for 'Inativo', statusNumerico será 0.
    // Qualquer outro valor de status resultará em 0.

    const statusNumerico: number = (status === 'Ativo') ? 1 : 0;

    const cliente = await clientes.criarCliente({ nome: nome, status: statusNumerico });

    // Usando o operador spread para copiar todas as propriedades e sobrescreve 
    // idcliente convertendo BigInt para Number
    const clienteConvertido = {
      ...cliente,
      idcliente: Number(cliente.idcliente),
    };
  
    return res.status(201).json(clienteConvertido)
    
  }catch(e){
    console.log(`Erro ao inserir o cliente: ${e}`)
  }
});

// Listar todos os clientes
routeCliente.get("/listarCliente", async (req: Request, res: Response) => {
  
  try {
    const listClientes = await clientes.listarCliente();

    // Mapeia cada cliente convertendo o idcliente BigInt para Number
    const listConvertida = listClientes.map(cliente => ({
      ...cliente,
      idcliente: Number(cliente.idcliente),
    }));

    res.status(200).json(listConvertida);

  } catch (e) {
    console.log(`Erro listar todos os clientes: ${e}`);
    res.status(500).json({ error: "Erro ao listar clientes" });
  }
});

// Buscar cliente pelo ID

routeCliente.get("/buscarCliente/:id", async(req:Request,res:Response) => {
  
  try{
    
    const idcliente = parseInt(req.params.id);
    const buscarCliente = await clientes.visualizarCliente(idcliente);

    // Converte BigInt para Number manualmente
    const buscarClienteConvertido = {
      ...buscarCliente,
      idcliente: Number(buscarCliente?.idcliente),
    };

    res.status(200).json(buscarClienteConvertido);
  
  }catch(e){
    console.log(`Erro ao buscar o cliente: ${e}`)
  }
});

// Atualizar cliente pelo ID
routeCliente.put("/atualizarCliente/:id", async (req:Request,res:Response) => {
  try{
  
  const {nome_cliente, status } = req.body;
  const idcliente = parseInt(req.params.id);
  
  const atualizarCliente = await clientes.atualizarCliente(idcliente,{nome:nome_cliente,status:status}); 
  
  const atualizarClienteConvertido = {
    ...atualizarCliente,
    idcliente: Number(atualizarCliente.idcliente)
  }
  
  res.status(200).json(atualizarClienteConvertido)

}catch(e){
    
    console.log(`Erro ao atualizar o cliente: ${e}`)
  }

});

// Deletar cliente pelo ID
routeCliente.delete("/deletarCliente/:id", async (req:Request,res:Response)=>{

  try{

    const idcliente = parseInt(req.params.id)
    const deletarCliente = await clientes.deletarCliente(idcliente) 

    const deletarClientesConvertidos = {
      ...deletarCliente,
      idcliente: Number(deletarCliente.idcliente)
    }
    
    res.status(200).send('Cliente Deletado com Sucesso!')
  
  }catch(e){

    console.log(`Erro ao deletar o cliente: ${e}`)
  
  }
});

export default routeCliente;

/*

ANOTAÇÕES:

POST / — cria um cliente (antes /criar, mas o padrão REST usa a rota base para criar recursos).

GET / — lista todos os clientes.

GET /:id — busca cliente por ID.

PUT /:id — atualiza cliente por ID.

DELETE /:id — exclui cliente por ID.


VERSÕES DE COMO FAZER A CONVERSÃO DO BIGINT PARA INT:

MANUALMENTE:

router.post("/criarCliente", async (req: Request, res: Response) => {
  try {
    const { nome_cliente, status } = req.body;

    const cliente = await clientes.criarCliente({ nome: nome_cliente, status });

    console.log(cliente);

    const clienteConvertido = {
      idcliente: Number(cliente.idcliente), // converte BigInt para Number manualmente
      clientenome: cliente.clientenome,
      clientestatus: cliente.clientestatus,
    };

    res.status(201).json(clienteConvertido);

  } catch (e) {
    console.log(`Erro ao inserir o cliente: ${e}`);
    res.status(500).json({ error: "Erro ao inserir o cliente" });
  }
});


USANDO O OPERADOR  spread: 

Esse operaador: "Espalha" todas as propriedades do objeto cliente dentro de um novo objeto.

router.post("/criarCliente", async (req: Request, res: Response) => {
  try {
    const { nome_cliente, status } = req.body;

    const cliente = await clientes.criarCliente({ nome: nome_cliente, status });

    console.log(cliente);

    // Usa spread para copiar todas as propriedades e sobrescreve idcliente convertendo BigInt para Number
    const clienteConvertido = {
      ...cliente,
      idcliente: Number(cliente.idcliente),
    };

    res.status(201).json(clienteConvertido);

  } catch (e) {
    console.log(`Erro ao inserir o cliente: ${e}`);
    res.status(500).json({ error: "Erro ao inserir o cliente" });
  }
});

  listClientes é um array de objetos, cada um com idcliente do tipo BigInt.

  map() cria um novo array, onde cada objeto é espalhado (...cliente) e o campo 
  idcliente é convertido explicitamente.

  Agora o JSON pode ser serializado sem erro



*/