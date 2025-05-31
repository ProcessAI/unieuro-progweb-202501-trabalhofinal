import express from 'express';
import userRoutes from './back/src/modules/router/user.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
