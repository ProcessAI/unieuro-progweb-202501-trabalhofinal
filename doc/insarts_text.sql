-- Active: 1750708565763@@127.0.0.1@5432@laudinho
SELECT *  FROM laudo.cliente;

-- Fazendo insarts em sql

INSERT INTO laudo.sede (sedenome, sedestatus, idcliente)
VALUES
  ('Matriz São Paulo', 1, 1),
  ('Filial Campinas', 0, 1),
  ('Unidade Rio de Janeiro', 1, 2),
  ('Escritório Salvador', 0, 2),
  ('Polo Belo Horizonte', 1, 3);
  ('Samambaia Norte', 1, 4);

SELECT * FROM laudo.tipoeq;

INSERT INTO laudo.tipoeq (tipoeqnome) VALUES
('Notebook'),
('Desktop'),
('Impressora'),
('Switch'),
('Servidor');

SELECT * FROM laudo.cliente;

SELECT * FROM laudo.equipamento;

SELECT * FROM laudo.sede;

SELECT * FROM laudo.endereco;

SELECT * FROM laudo.tipoeq;

SELECT * FROM laudo.usuario;