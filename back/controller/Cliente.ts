import {Request,Response} from 'express';

const index = function(request: Request, response:Response){
    response.send('Faça o teste, vá no seu navegador, coloque localhost:3000 e de enter! Tararaaaa Teste realizado com sucesso');
}

/*aqui estamos exportando a nossa funução index */
export{index}