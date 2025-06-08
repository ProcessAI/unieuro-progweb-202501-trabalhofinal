import express from 'express';
import userRoutes from '../login/routes/Route_user';
import protegidoRoutes from '../login/routes/Route_teste';


const app = express();

app.use(express.json());
app.use('/auth', userRoutes);
app.use('/api', protegidoRoutes); // ou o path que quiser

export default app;