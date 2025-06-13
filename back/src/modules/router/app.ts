// Importando express e cors
import express, { Request, Response } from 'express';
import cors from 'cors';

// Importando Rotas
import userRoutes from '../login/routes/usuario-routes';
import router from '../laudo/routes/RouteCliente';
import enderecoRouter from '../laudo/routes/RouteEndereco';
import sedeRoutes from '../laudo/routes/sede-routes';
import protegidoRoutes from '../login/routes/auth-middleware-routes';

// Importando dotenv para configuração de variáveis ambiente
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

/* Materializando um objeto do nosso Servidor express */
const app = express();

/* Middleware para aceitar requisições JSON e habilitar CORS */
app.use(express.json());
app.use(cors());

/* Configurando as rotas */
app.use('/auth', userRoutes);           // Usuários
app.use('/api', protegidoRoutes);       // rotas api protegidas
app.use('/cliente', router);            // Cliente
app.use('/sede', sedeRoutes);           // Sede
app.use('/endereco', enderecoRouter);   // Endereço

/* Rota raiz para teste */
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ mensagem: "Diretório Raiz" });
});

/* Criando o nosso servidor express */
app.listen(PORT, (): void => {
    console.log(`SERVIDOR RODANDO NA PORTA: ${PORT}`);
});

export default app;
