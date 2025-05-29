Esse é um exemplo de comandos sql usando schemas

/* Selecionando todos os registros da tabela cliente em laudinho3 */

SELECT * FROM laudo.cliente;

/* Inserindo registros na tabela cliente em laudinho3 */

INSERT INTO laudo.cliente (clientenome, clientestatus)
VALUES ('laudinho3', 1);