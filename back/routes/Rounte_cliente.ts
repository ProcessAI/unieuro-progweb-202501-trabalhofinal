/* 
    Criando rotas bem definidas no nosso projeto
    Para facilitar a importação e exportação
*/

import express from 'express';

import {
  criarCliente,
  listarClientes,
  buscarCliente,
  atualizarCliente,
  deletarCliente
} from "../controller/Cliente";

const router = express.Router();

router.post("/", criarCliente);
router.get("/cliente", listarClientes);
/*router.get("/:id", buscarCliente);*/
router.put("/:id", atualizarCliente);
router.delete("/:id", deletarCliente);

export default router;