ANOTAÇÃO SOBRE MÉTODOS HTTPS COM EXPRESS

- Objetivo dessa anotação é demonstrar como funcionar as requisições HTTPS na URI´s do CLIENTE PARA O SERVIDOR

- O express possui métodos nativos de roteamento para solicitações, requisições do cliente através de URI´s, Abaixo estão alguns exemplos:


import express,{Request,Response} from 'express';


/* criando uma objeto de express*/

const app:Express = express();