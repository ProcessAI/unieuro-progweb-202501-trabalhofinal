import express from 'express';

import {
  criarCliente,
  listarClientes,
  buscarCliente,
  atualizarCliente,
  deletarCliente
} from "../service/Cliente";

const router = express.Router();

// Criar um novo cliente
router.post("/criar", criarCliente);

// Listar todos os clientes
router.get("/listar", listarClientes);

// Buscar cliente pelo ID
/*router.get("/buscar/:id", buscarCliente);*/

// Atualizar cliente pelo ID
router.put("at/:id", atualizarCliente);

// Deletar cliente pelo ID
router.delete("del/:id", deletarCliente);

export default router;

/*

POST / — cria um cliente (antes /criar, mas o padrão REST usa a rota base para criar recursos).

GET / — lista todos os clientes.

GET /:id — busca cliente por ID.

PUT /:id — atualiza cliente por ID.

DELETE /:id — exclui cliente por ID.

*/