//NOTE: Não retorne RES direto, retorne void, alguma coisa com o Express 5 causa erro de typagem
// https://stackoverflow.com/questions/79071082/typescript-error-no-overload-matches-this-call-in-express-route-handler


import express from 'express';
import dotenv from 'dotenv';
import laudoRoutes from '../laudo/routes/laudo-routes';
import tipoeqRoutes from '../laudo/routes/tipoeq-routes';

import userRoutes from '../login/routes/usuario-routes';
import protegidoRoutes from '../login/routes/auth-middleware-routes';
import sedeRoutes from '../laudo/routes/sede-routes';

import routerCliente from "../laudo/routes/RouteCliente";
import enderecoRouter from "../laudo/routes/RouteEndereco";
import sedeRouter from "../laudo/routes/RouteSede";

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/laudos', laudoRoutes);
app.use('/api/tipoeq', tipoeqRoutes);


app.use('/auth', userRoutes);
app.use('/api', protegidoRoutes);


app.use('/sede', sedeRoutes);
app.use('/sede', sedeRouter);


app.use('/cliente', routerCliente);
app.use('/endereco', enderecoRouter);

export default app;