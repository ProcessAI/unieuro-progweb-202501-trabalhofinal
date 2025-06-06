// back/src/index.ts
import app from './modules/router/app.js';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
