/* Exportando Class e Métodos da lib express */
import express, { json,Request,Response } from "express";

/* importando todas as rotas criadas em routes */

import router from "../laudo/routes/RouteCliente"


/* materializando um objeto do nosso Servidor express */
const app = express();

//const port = process.env.PORT || 3000;
const port = 3000;

app.use(express.json()) // configuramos o nosso express para aceitar requisições json

/* Configurando express para usar a rotas criadas! */
app.use('/cliente',router)


// expreess rescebendo requisições get no nosso diretório raiz
app.get('/',  (req:Request,res:Response) => {
    
    const resposta = res.status(200).json({messagem:"Dretório Raiz"});
    console.log(resposta)

});


app.get('/cliente', )

/* Criando o nosso Servidor express */

app.listen(port, ():void =>{

    const mensagem:string = 'SERVIDOR RODANDO NA PORTA:'
    console.log(`${mensagem} ${port}`)

});