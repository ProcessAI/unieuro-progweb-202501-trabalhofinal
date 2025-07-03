<h3>Cadastro de sede:</h3>
POST 
https://laudinho.cleversystems.net/api/sede
{
  "sedenome": "Nome",
  "sedestatus": 1 (Opcional),
  "idcliente": 2
}

Processamento:
- Verifica se o nome escolhido para a sede já existe
- O valor default de sedestatus é 0
- Não verifica o status do cliente para a inserção

<h3>Buscar todas as sedes:</h3>
GET
https://laudinho.cleversystems.net/api/sede

<h3>Buscar sede por ID:</h3>
GET
https://laudinho.cleversystems.net/api/sede/{idsede}

<h3>Atualizar sede:</h3>
PUT
https://laudinho.cleversystems.net/api/sede/{idsede}
{
  "sedenome": "Nome" (Opcional),
  "sedestatus": 1 (Opcional)
}

Processamento:
- Verifica se já existe uma sede com o nome escolhido (mas não causa conflito com o nome da própria sede no caso da tentativa de "alterar para o mesmo nome")

<h3>Apagar sede:</h3>
DELETE
https://laudinho.cleversystems.net/api/sede/{idsede}

<h3>Buscar todas as sedes por ID do cliente:</h3>
GET
https://laudinho.cleversystems.net/api/sede/cliente/{idcliente}