import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// importe o router real, não o service
import userRoutes from '../login/routes/user-routes';
import tipoLaudoRoutes from '../laudo/routes/tipo-laudo-routes'; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', userRoutes);
app.use('/tipo-laudo', tipoLaudoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
