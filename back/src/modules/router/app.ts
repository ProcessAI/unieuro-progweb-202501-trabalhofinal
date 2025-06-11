import express from 'express';
import userRoutes from '../login/routes/usuario-routes';
import protegidoRoutes from '../login/routes/auth-middleware-routes';
import sedeRoutes from '../laudo/routes/sede-routes';


const app = express();

app.use(express.json());
app.use('/auth', userRoutes);
app.use('/api', protegidoRoutes);
app.use('/sede', sedeRoutes);

export default app;