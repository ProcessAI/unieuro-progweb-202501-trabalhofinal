import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

/* Exportando Class e Métodos da lib express */
import express, { Request, Response } from "express";

/* importando todas as rotas criadas em routes */
import router from "../laudo/routes/RouteCliente";
import enderecoRouter from "../laudo/routes/RouteEndereco";
import sedeRouter from "../laudo/routes/RouteSede";


/* materializando um objeto do nosso Servidor express */
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Porta do Vite/React
    credentials: true,
}));


//const port = process.env.PORT || 3000;
const port = 3000;

app.use(express.json()); // configuramos o nosso express para aceitar requisições json

/* Configurando express para usar as rotas criadas!  */
app.use('/cliente', router); // Cliente 
app.use('/sede', sedeRouter); // Sede
app.use('/endereco', enderecoRouter); // endereco

// express recebendo requisições get no nosso diretório raiz
app.get('/', (req: Request, res: Response) => {
    const resposta = res.status(200).json({ messagem: "Diretório Raiz" });
    console.log(resposta);
});

/* Criando o nosso Servidor express */
app.listen(port, (): void => {
    const mensagem: string = 'SERVIDOR RODANDO NA PORTA:';
    console.log(`${mensagem} ${port}`);
});

