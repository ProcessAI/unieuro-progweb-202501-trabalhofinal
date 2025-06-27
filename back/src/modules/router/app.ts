//NOTE: Não retorne RES direto, retorne void, alguma coisa com o Express 5 causa erro de typagem
// https://stackoverflow.com/questions/79071082/typescript-error-no-overload-matches-this-call-in-express-route-handler
import express from 'express';
import dotenv from 'dotenv'; // Importando dotenv para configuração de variáveis ambiente
import cors from 'cors'; // para permitir requisições do front-end

// importando os nossos Routes
import laudoRoutes from '../laudo/routes/laudo-routes';
import tipoeqRoutes from '../laudo/routes/tipoeq-routes';
import tipoInstalacaoRoutes from '../laudo/routes/tipo-de-instalacao-routes';
import tipoLaudoRoutes from '../laudo/routes/tipo-laudo-routes'
import userRoutes from '../login/routes/usuario-routes';
import routeCliente from '../laudo/routes/RouteCliente';
import routeEquipamento from '../laudo/routes/RouteEquipamento';
import enderecoRouter from '../laudo/routes/RouteEndereco';
import sedeRoutes from '../laudo/routes/sede-routes';
import protegidoRoutes from '../login/routes/auth-middleware-routes';

import { authMiddleware } from '../login/auth-middleware';
/* Materializando um objeto do nosso Servidor express */
const app = express();

// configurnado o cors para permitir que o vite envie requisições
app.use(cors({
  origin: 'http://localhost:5173', // porta do Vite
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


/* Middleware para aceitar requisições JSON e habilitar CORS */
app.use(express.json());

/* Nossos Routes para cada Fucionalidade ou Serviço*/
app.use('/laudos', authMiddleware, laudoRoutes);
app.use('/tipoeq',authMiddleware,  tipoeqRoutes);
app.use('/sede',authMiddleware, sedeRoutes);
app.use('/cliente',authMiddleware, routeCliente);
app.use('/endereco',authMiddleware, enderecoRouter);
app.use('/tipo-instalacao',authMiddleware, tipoInstalacaoRoutes);
app.use('/tipo-laudo',authMiddleware,tipoLaudoRoutes)
app.use('/auth', userRoutes);
app.use('/protected',authMiddleware ,protegidoRoutes);
app.use('/equipamento',authMiddleware,routeEquipamento);

export default app;
