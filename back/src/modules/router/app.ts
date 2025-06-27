//NOTE: Não retorne RES direto, retorne void, alguma coisa com o Express 5 causa erro de typagem
// https://stackoverflow.com/questions/79071082/typescript-error-no-overload-matches-this-call-in-express-route-handler
import express from 'express';
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
app.use('/api/laudos',  laudoRoutes);
app.use('/api/tipoeq',  tipoeqRoutes);
app.use('/api/sede', sedeRoutes);
app.use('/api/cliente', routeCliente);
app.use('/api/endereco', enderecoRouter);
app.use('/api/tipo-instalacao', tipoInstalacaoRoutes);
app.use('/api/tipo-laudo',tipoLaudoRoutes)
app.use('/api/auth', userRoutes);
app.use('/api/protected',protegidoRoutes);
app.use('/api/equipamento',routeEquipamento);

export default app;
