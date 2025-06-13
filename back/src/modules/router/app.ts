import cors from 'cors';

/* Exportando Class e Métodos da lib express */
import express, { Request, Response } from "express";

/* importando todas as rotas criadas em routes */
import router from "../laudo/routes/RouteCliente";
import enderecoRouter from "../laudo/routes/RouteEndereco";
import sedeRouter from "../laudo/routes/RouteSede";


// importando o dotenv para pegar o arquivo de configuração .env
import dotenv from 'dotenv';
dotenv.config();

/* materializando um objeto do nosso Servidor express */
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Porta do Vite/React
    credentials: true,
}));


app.use(express.json()); // configuramos o nosso express para aceitar requisições json

/* Configurando express para usar as rotas criadas!  */
app.use('/sede', sedeRouter);
app.use('/cliente', router);
app.use('/endereco', enderecoRouter);

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

