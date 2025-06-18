/*Esse é um exemplo de comandos sql usando schemas*/

/* Selecionando todos os registros da tabela cliente em laudinho3 */

SELECT * FROM laudo.cliente;

/* Inserindo registros na tabela cliente em laudinho3 */

INSERT INTO laudo.cliente (clientenome, clientestatus)
VALUES ('laudinho3', 1);
INSERT INTO laudo.cliente (clientenome, clientestatus)
VALUES ('laudinho2', 1);
INSERT INTO laudo.cliente (clientenome, clientestatus)
VALUES ('laudinho1', 0);


SELECT idcliente, clientenome, clientestatus
	FROM laudo.cliente;


/* tive que mudar a coluna de idcliente para bigint*/
ALTER TABLE laudo.cliente ALTER COLUMN idcliente TYPE bigint;
