import express, { Request, Response } from 'express';
import cors from 'cors';
// Rotas laudinho-2
import userRoutes from '../login/routes/usuario-routes';
import protegidoRoutes from '../login/routes/auth-middleware-routes';
import sedeRoutes from '../laudo/routes/sede-routes';

// Rotas laudinho-3
import router from "../laudo/routes/RouteCliente";
import enderecoRouter from "../laudo/routes/RouteEndereco";
import sedeRouter from "../laudo/routes/RouteSede";

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

/* materializando um objeto do nosso Servidor express */
const app = express();
const cors = require('cors');

// laudinho-2

app.use(express.json());
app.use(cors());
app.use('/auth', userRoutes);
app.use('/api', protegidoRoutes);
app.use('/sede', sedeRoutes);

//laudinho-3
app.use('/sede', sedeRouter);
app.use('/cliente', router);
app.use('/endereco', enderecoRouter);

app.use(express.json()); // configuramos o nosso express para aceitar requisições json

// express recebendo requisições get no nosso diretório raiz
// app.get('/', (req: Request, res: Response) => {
//     const resposta = res.status(200).json({ messagem: "Diretório Raiz" });
//     console.log(resposta);
// });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;