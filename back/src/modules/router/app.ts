// back/src/modules/router/app.ts
import express from 'express';
import cors from 'cors';

// CORREÇÃO AQUI: Importação padrão, sem chaves {}.
// O nome 'tipoLaudoRouter' aqui pode ser qualquer nome que você quiser dar ao roteador importado.
import tipoLaudoRouter from '../../modules/laudo/routes/tipo-laudo-routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Use o roteador importado.
// As rotas dentro de tipo-laudo.routes.ts serão acessíveis sob '/api/tipolaudo'
app.use('/api/tipolaudo', tipoLaudoRouter);

export default app;
