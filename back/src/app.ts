/* Aqui é onde vamos configurar nossos servidor */

/*importando express*/
import express from 'express'

// routes 
import Rounter_cliente from '../routes/Rounter_cliente'

/*craindo uma variável constante no nosso projeto para uma instÂncia de express */
const app = express();


/*Criando uma rota! */
app.use('/', Rounter_cliente)

/* colocando o nosso servidor express para rodar na porta 3000 */
app.listen(3000,function(){

    let a:string = 'Configurando nosso servidor express'
    console.log("Oi mundo "+ a +" Não esqueça de usar o npm run dev hey! facilite sua vida")
});