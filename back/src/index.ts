import dotenv from 'dotenv';
import app from './modules/router/app';

dotenv.config();
const PORT =  8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
