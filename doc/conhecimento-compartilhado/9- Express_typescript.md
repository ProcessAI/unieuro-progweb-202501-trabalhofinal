1 - ROTEAMENTO 

Roteamento refere-se a como os endpoints (URIs) de um aplicativo respondem às solicitações dos clientes. Para uma introdução ao roteamento.

    Exemplo básico:

        Você define o roteamento usando métodos do objeto app do Express que correspondem aos métodos HTTP; por exemplo:
        
            app.get() para lidar com requisições GET 
            
            app.post() para lidar com requisições POST. 
            
            Para uma lista completa, veja app.METHOD. 
            
            Você também pode usar app.all() para lidar com todos os métodos HTTP e 
            
            app.use() para especificar middleware como a função de retorno de chamada (veja Usando middleware para mais detalhes).

    Esses métodos de roteamento especificam uma função de retorno de chamada (às vezes chamada de "função manipuladora") que é chamada quando o aplicativo recebe uma solicitação para a rota (endpoint) e método HTTP especificados. Em outras palavras, o aplicativo "escuta" por requisições que correspondam às rotas e métodos especificados e, quando detecta uma correspondência, chama a função de retorno de chamada especificada.

    Na verdade, os métodos de roteamento podem ter mais de uma função de retorno de chamada como argumento. Com várias funções de retorno de chamada, é importante fornecer next como um argumento da função e, em seguida, chamar next() dentro do corpo da função para passar o controle para a próxima função de retorno de chamada.

    O código a seguir é um exemplo de uma rota bem básica:

        impor express,{ Request,Response } from "express";

        const app = express()

            // respond with "hello world" when a GET request is made to the homepage
            
            app.get('/', (req:Request, res:Response) => {
            
            res.send('hello world')
        })

        Explicação:

            app.get('/'): Define uma rota que escuta requisições GET no caminho /.

            (req, res) => { res.send('Hello, world!'); }: Quando a rota é acessada, envia uma resposta com o texto "Hello, world!".

            app.listen(3000, ...): Inicia o servidor e o faz escutar na porta 3000.


2 -  MÉTODOS DE ROTAS

    Um método de rota é derivado de um dos métodos HTTP e é associado a uma instância da classe express.

    O código a seguir é um exemplo de rotas que são definidas para os métodos GET e POST no caminho raiz ("/") do aplicativo:

        por express,{ Request,Response } from "express";

        const app = express();

        app.get('/', (req, res) => {
            res.send('Recebido um GET na rota raiz');
        });

        app.post('/', (req, res) => {
            res.send('Recebido um POST na rota raiz');
        });

        Explicação:

            app.get('/'): Lida com requisições HTTP do tipo GET feitas à raiz do aplicativo.

            app.post('/'): Lida com requisições HTTP do tipo POST feitas à mesma rota.

            Ambas usam funções de callback para enviar uma resposta ao cliente.

    O Express oferece suporte a métodos que correspondem a todos os métodos de requisição HTTP: GET, POST e assim por diante. Para uma lista completa, veja https://expressjs.com/en/5x/api.html#app.METHOD

    Existe um método especial de roteamento, app.all(), usado para carregar funções de middleware em um caminho para todos os métodos de requisição HTTP.

    Por exemplo, o manipulador a seguir é executado para requisições à rota "/secret", independentemente de ser um GET, POST, PUT, DELETE ou qualquer outro método HTTP suportado pelo módulo http:

        impor express,{ Request,Response } from "express";

        app.all('/secret', (req:Request, res:Response, next:Next) => {
            console.log('Acesso à rota secreta...');
            next(); // passa o controle para o próximo middleware ou rota
        });

    Explicação: 

    app.all('/secret', ...): Executa a função de callback para qualquer tipo de requisição à rota /secret.

    next(): Permite que o Express continue para o próximo middleware ou função de rota apropriada.

3 - Route paths (Caminho de Rotas)

    Caminhos de rota, em combinação com um método de requisição, definem os endpoints nos quais as requisições podem ser feitas. Os caminhos de rota podem ser strings, padrões de strings ou expressões regulares.

    - Caminhos de rota baseados em strings:

        Esse caminho de rota vai corresponder a requisições feitas para a rota raiz, /.

        impor express,{ Request,Response } from "express";
        
        app.get('/', (req:Request, res:Response) => {
            res.send('root')
        })

        Esse caminho de rota irá corresponder a requisições para /about.

        app.get('/about', (req:Request, res:Response) => {
            res.send('about')
        })

        Esse caminho de rota irá corresponder a requisições para /random.text.

        import express,{ Request,Response } from "express";

        app.get('/random.text', (req:Request, res:Response) => {
            res.send('random.text')
        }) 

4 - Parâmetros de rota

    No Express, você pode definir parâmetros de rota para capturar valores dinâmicos nas URLs. Esses parâmetros são indicados com dois pontos : antes do nome, e permitem acessar partes da URL como variáveis dentro do seu código.

    Parâmetros de rota são segmentos nomeados da URL que são usados para capturar os valores especificados na sua posição na URL. Os valores capturados são armazenados no objeto req.params, com o nome do parâmetro de rota especificado no caminho como suas respectivas chaves.

        import express,{ Request,Response } from "express";

        app.get('/user/:id', (req:Request, res:Response) => {
            const userId = req.params.id;
            res.send(`Usuário com ID: ${userId}`);
        });

    Neste exemplo, a rota irá corresponder a URLs como /user/123, /user/abc, etc., e o valor após /user/ será capturado no parâmetro id e pode ser usado no tratamento da requisição.


    Route path: /users/:userId/books/:bookId
    Request URL: http://localhost:3000/users/34/books/8989
    req.params: { "userId": "34", "bookId": "8989" }

    Para definir rotas com parâmetros de rota, basta especificar os parâmetros na URL do caminho da rota, conforme mostrado abaixo.

        import express,{ Request,Response } from "express";

        app.get('/users/:userId/books/:bookId', (req:Request, res:Response) => {
            res.send(req.params)
        })

    Como o hífen (-) e o ponto (.) são interpretados literalmente, eles podem ser usados junto com parâmetros de rota para finalidades úteis.

    Route path: /flights/:from-:to
    Request URL: http://localhost:3000/flights/LAX-SFO
    
    req.params: { "from": "LAX", "to": "SFO" }

    Route path: /plantae/:genus.:species
    Request URL: http://localhost:3000/plantae/Prunus.persica
    
    req.params: { "genus": "Prunus", "species": "persica" }


    Para ter mais controle sobre a string exata que pode ser correspondida por um parâmetro de rota, você pode adicionar uma expressão regular entre parênteses () após o parâmetro:


        Route path: /user/:userId(\d+)
        Request URL: http://localhost:3000/user/42
        req.params: {"userId": "42"}


5 - Manipuladores de rota (Route handlers)

    Você pode fornecer múltiplas funções de callback que se comportam como middleware para tratar uma requisição. A única exceção é que esses callbacks podem chamar next('route') para ignorar os demais callbacks da rota atual. Esse mecanismo pode ser usado para impor pré-condições em uma rota e, se não houver motivo para continuar com a rota atual, passar o controle para rotas subsequentes.

    Os manipuladores de rota podem ser:

        Uma função

        Um array de funções

        Uma combinação de ambos

    Como mostrado nos exemplos a seguir.

    Uma única função de callback pode ser usada para tratar uma rota. Por exemplo:

        app.get('/example/a', (req, res) => {
            res.send('Hello from A!')   
        })
    
    Mais de uma função de callback pode tratar uma rota (certifique-se de especificar o objeto next). Por exemplo:

        app.get('/example', (req, res, next) => {
                console.log('Primeiro callback');
                next(); // passa para o próximo callback
            },
            (req, res) => {
                res.send('Segundo callback');
            }
        );


        app.get('/example/b', (req, res, next) => {
            console.log('the response will be sent by the next function ...')
            next()
        }, (req, res) => {
            res.send('Hello from B!')
        })
    
    Um array de funções de callback pode tratar uma rota. Por exemplo:

        const cb0 = function (req, res, next) {
            console.log('CB0')
        next()
        }

        const cb1 = function (req, res, next) {
            console.log('CB1')
            next()
        }

        const cb2 = function (req, res) {
            res.send('Hello from C!')
        }

        app.get('/example/c', [cb0, cb1, cb2])

    Uma combinação de funções independentes e arrays de funções pode tratar uma rota. Por exemplo:

        const cb0 = function (req, res, next) {
            console.log('CB0')
            next()
        }

        const cb1 = function (req, res, next) {
            console.log('CB1')
            next()
        }

        app.get('/example/d', [cb0, cb1], (req, res, next) => {
            console.log('the response will be sent by the next function ...')
            next()
        }, (req, res) => {
            res.send('Hello from D!')
        })

6 - Métodos de resposta (Response methods)

    Os métodos do objeto de resposta (res), mostrados na tabela a seguir, podem enviar uma resposta ao cliente e encerrar o ciclo de requisição-resposta.

    Se nenhum desses métodos for chamado dentro de um manipulador de rota, a requisição do cliente ficará pendente (sem resposta).

    res.download()	-> Solicita que um arquivo seja baixado.
    res.end() -> Encerra o processo de resposta.
    res.json() -> Envia uma resposta no formato JSON.
    res.jsonp() ->	Envia uma resposta JSON com suporte a JSONP.
    res.redirect() ->	Redireciona a requisição para outra URL.
    res.render() ->	Renderiza um template de visualização (view).
    res.send() ->	Envia uma resposta de vários tipos (string, objeto, buffer, etc.).
    res.sendFile() ->	Envia um arquivo como fluxo de bytes (octet stream).
    res.sendStatus() ->	Define o código de status da resposta e envia sua descrição como resposta.

7 - app.route() 

    O método app.route() do Express permite encadear vários manipuladores de rota para um mesmo caminho (endpoint), organizando o código de forma mais limpa e modular.

    Você pode criar manipuladores de rota encadeáveis para um caminho de rota usando app.route(). Como o caminho é especificado em um único local, isso ajuda na criação de rotas modulares, além de reduzir redundâncias e erros de digitação.

    Aqui está um exemplo de manipuladores de rota encadeados que são definidos usando app.route()

        app.route('/book')
            .get((req, res) => {
                res.send('Obter um livro');
            })
            .post((req, res) => {
                res.send('Adicionar um livro');
            })
            .put((req, res) => {
                res.send('Atualizar o livro');
        });

8 - express.Router

    O express.Router é um módulo do Express que permite criar roteadores modulares e independentes. Ele funciona como um mini-app, onde você pode definir rotas, middlewares e agrupá-los para organizar melhor sua aplicação.

    Use a classe express.Router para criar manipuladores de rota modulares e montáveis. Uma instância de Router é um sistema completo de middleware e roteamento; por isso, frequentemente é chamada de “mini-app”.

    O exemplo a seguir cria um router como um módulo, carrega uma função middleware nele, define algumas rotas e monta o módulo do router em um caminho no aplicativo principal.

        const express = require('express');
        const router = express.Router();

        // Middleware específico para este router
        
        router.use((req, res, next) => {
            console.log('Tempo:', Date.now());
            next();
        });

        // Define uma rota GET para "/birds/"
            router.get('/', (req, res) => {
            res.send('Lista de pássaros');
        });

        // Define uma rota GET para "/birds/:id"
        router.get('/:id', (req, res) => {
            res.send(`Detalhes do pássaro ${req.params.id}`);
        });

        module.exports = router;

    Em seguida, carregue o módulo do router no aplicativo principal:

        const express = require('express');
        const app = express();
        const birdsRouter = require('./birds'); // importa o router criado

        // Monta o router em /birds
        app.use('/birds', birdsRouter);

        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });

    O app agora será capaz de tratar requisições para /birds e /birds/about, além de executar a função middleware timeLog que é específica para essa rota.

    Porém, se a rota pai /birds tiver parâmetros de caminho (path parameters), eles não estarão acessíveis por padrão nas subrotas. Para que esses parâmetros fiquem acessíveis, você precisará passar a opção mergeParams para o construtor do Router.

    







