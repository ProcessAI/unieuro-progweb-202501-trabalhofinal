import express from 'express';
import laudoRoutes from './modules/laudo/routes/laudo-routes';
import tipoeqRoutes from './modules/laudo/routes/tipoeq-routes';

const app = express();
app.use(express.json());

// Rotas
app.use('/api/laudos', laudoRoutes);
app.use('/api/tipoeq', tipoeqRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});