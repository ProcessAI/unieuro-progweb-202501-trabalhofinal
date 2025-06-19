//NOTE: Não retorne RES direto, retorne void, alguma coisa com o Express 5 causa erro de typagem
// https://stackoverflow.com/questions/79071082/typescript-error-no-overload-matches-this-call-in-express-route-handler
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import laudoRoutes from '../laudo/routes/laudo-routes';
import tipoeqRoutes from '../laudo/routes/tipoeq-routes';
import tipoLaudoRoutes from '../laudo/routes/tipo-laudo-routes'

import userRoutes from '../login/routes/usuario-routes';
import protegidoRoutes from '../login/routes/auth-middleware-routes';
import sedeRoutes from '../laudo/routes/sede-routes';

import routerCliente from "../laudo/routes/RouteCliente";
import enderecoRouter from "../laudo/routes/RouteEndereco";
import sedeRouter from "../laudo/routes/RouteSede";

dotenv.config();

const app = express();
app.use (cors());
app.use(express.json());

app.use('/api/laudos', laudoRoutes);
app.use('/api/tipoeq', tipoeqRoutes);
app.use('/api/sede', sedeRoutes);
app.use('/api/sede', sedeRouter);
app.use('/api/cliente', routerCliente);
app.use('/api/endereco', enderecoRouter);
app.use('/api/tipo-laudo',tipoLaudoRoutes)

app.use('/api/auth', userRoutes);
app.use('/api/protected', protegidoRoutes);

export default app;