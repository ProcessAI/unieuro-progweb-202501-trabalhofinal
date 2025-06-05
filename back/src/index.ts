import express from 'express';
import tipoeqRoutes from './modules/laudo/routes/tipoeq';
import cors from 'cors'; // Se ainda não adicionou CORS, adicione

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend rodando!');
});

// O erro provavelmente está aqui se você escreveu `app.use(tipoeqRoutes('/tipoeq'))`
app.use('/tipoeq', tipoeqRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
