import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect()
  .then(client => {
    return client.query('SET search_path TO laudo;')
      .then(() => client.release())
      .catch(err => {
        client.release();
        console.error('Erro ao setar search_path:', err);
      });
  })
  .catch(err => {
    console.error('Erro ao conectar no banco:', err);
  });
