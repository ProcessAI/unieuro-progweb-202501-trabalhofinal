// Criando um servidor express

import express from 'express';

// criando a instância do servidor
const server = express();

server.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

export {server}