import { pool } from './db';

export interface User {
  id?: number;
  nome: string;
  email: string;
  senha_hash: string;
  cpf: string;
  data_cadastro?: Date;
}

export async function createUser(user: User): Promise<User> {
  const result = await pool.query(
    `INSERT INTO usuario (nome, email, senha_hash, cpf)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [user.nome, user.email, user.senha_hash, user.cpf]
  );
  return result.rows[0];
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await pool.query(
    `SELECT * FROM usuario WHERE email = $1`,
    [email]
  );
  return result.rows[0] || null;
}
