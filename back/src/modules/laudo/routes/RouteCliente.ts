/* importando a classe Router do express e Classes de requisição e resposta do express */
import express,{Request,Response, Router} from 'express';

/* importando a classe ClienteService da camada service*/
import {ClienteService} from '../service/ClienteService'

// Materializando um objeto Router da class Router do express
const router:Router = Router();

// Materializando um objeto ClienteService da class ClienteService
const clientes:ClienteService = new ClienteService();

// Criar um novo cliente
router.post("/criarCliente", async(req:Request,res:Response) => {

  try{
    const { id,nome_cliente, status } = req.body;
    const cliente = await clientes.criarCliente({nome:nome_cliente,status:status});
    res.status(201).json(cliente)
  }catch(e){
    console.log(`Erro ao inserir o cliente: ${e}`)
  }
});

// Listar todos os clientes
router.get("/listarCliente", async (req:Request,res:Response)=>{

  try{

    const listClientes = await clientes.listarCliente();
    res.status(200).json(listClientes) 

  }catch(e){

    console.log(`Erro listar todos os clientes: ${e}`)

  }
});

// Buscar cliente pelo ID

router.get("/buscarCliente/:id", async(req:Request,res:Response) => {
  try{
    
    const idcliente = parseInt(req.params.id);
    const buscarCliente = await clientes.visualizarCliente(idcliente)
    res.status(200).json(buscarCliente)
  
  }catch(e){
    console.log(`Erro ao buscar o cliente: ${e}`)
  }
});

// Atualizar cliente pelo ID
router.put("/atualizarCliente/:id", async (req:Request,res:Response) => {
  try{
  
  const{nome_cliente,status_cliente} = req.body;
  const idcliente = parseInt(req.params.id);
  const atualizarCliente = await clientes.atualizarCliente(idcliente,{nome:nome_cliente,status:status_cliente}); 
  res.status(200).json(atualizarCliente)

}catch(e){
    
    console.log(`Erro ao atualizar o cliente: ${e}`)
  }

});

// Deletar cliente pelo ID
router.delete("deletarCliente/:id", async (req:Request,res:Response)=>{

  try{

    const idcliente = parseInt(req.params.id)
    const deletarCliente = await clientes.deletarCliente(idcliente) 
    res.status(200).send('Cliente Deletado com Sucesso!')
  }catch(e){

    console.log(`Erro ao deletar o cliente: ${e}`)
  
  }
});

export default router;

/*

ANOTAÇÕES:

POST / — cria um cliente (antes /criar, mas o padrão REST usa a rota base para criar recursos).

GET / — lista todos os clientes.

GET /:id — busca cliente por ID.

PUT /:id — atualiza cliente por ID.

DELETE /:id — exclui cliente por ID.

*/