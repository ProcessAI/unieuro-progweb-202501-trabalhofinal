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

// importando o dotenv para pegar o arquivo de configuração .env
import dotenv from 'dotenv';
dotenv.config();

/* materializando um objeto do nosso Servidor express */
const app = express();
const cors = require('cors');

// laudinho-2

app.use(express.json());
app.use(cors());
app.use('/auth', userRoutes);
app.use('/api', protegidoRoutes);
app.use('/sede', sedeRoutes);

app.use(express.json()); // configuramos o nosso express para aceitar requisições json

/* Configurando express para usar as rotas criadas!  */
app.use('/cliente', router); // Cliente 
app.use('/sede', sedeRouter); // Sede
app.use('/endereco', enderecoRouter); // endereco

app.use(express.json()); // configuramos o nosso express para aceitar requisições json

// express recebendo requisições get no nosso diretório raiz
app.get('/', (req: Request, res: Response) => {
    const resposta = res.status(200).json({ messagem: "Diretório Raiz" });
    console.log(resposta);
});


// Puxando o Port do arquivo.env

const port = 3000

/* Criando o nosso Servidor express */
app.listen(port, (): void => {
    const mensagem: string = 'SERVIDOR RODANDO NA PORTA:';
    console.log(`${mensagem} ${port}`);
});

export default app;