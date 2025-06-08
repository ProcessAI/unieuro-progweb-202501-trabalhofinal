import express from 'express';
import userRoutes from '../login/routes/usuario-routes';
import protegidoRoutes from '../login/routes/auth-middleware-routes';


const app = express();

app.use(express.json());
app.use('/auth', userRoutes);
app.use('/api', protegidoRoutes); // ou o path que quiser

export default app;