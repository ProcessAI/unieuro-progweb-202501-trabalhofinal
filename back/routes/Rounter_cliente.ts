/* 
    Criando rotas bem definidas no nosso projeto
    Para facilitar a importação e exportação
*/

import express from 'express';

// Controllers 
import { index } from '../controller/Cliente';

const router = express.Router();

router.get('/', index)

export default router;