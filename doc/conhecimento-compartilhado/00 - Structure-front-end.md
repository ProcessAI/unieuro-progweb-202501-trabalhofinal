front/
│
├── public/
│   └── ... (arquivos estáticos públicos, acessíveis diretamente)
│
└── src/
    ├── contents/
    │   └── ... (conteúdos estáticos e constantes da aplicação, como textos, imagens, dados fixos)
    │
    ├── hooks/
    │   └── ... (custom React hooks reutilizáveis para lógica de estado e efeitos)
    │
    ├── service/
    │   └── ... (funções que fazem requisições HTTP, integração com APIs, lógica de comunicação externa)
    │
    └── pages/
        └── ... (componentes que representam páginas da aplicação, organizados por rota)


// EXPECÍFICAÇÕES:

    public/
    
        Pasta destinada a arquivos estáticos que serão servidos diretamente, sem processamento pelo bundler.

        Exemplos: imagens, fontes, arquivos HTML, favicon, robots.txt, etc.

        Conteúdos aqui são acessíveis via URL diretamente (ex: /logo.png).

    src/

        Contém todo o código fonte da aplicação React.

    contents/

        Armazena dados estáticos que podem ser usados na interface.

        Pode conter textos fixos, configurações, imagens internas, JSON com dados fixos.

        Exemplo: textos multilíngues, listas de opções, templates, etc.

    hooks/
        
        Guarda custom hooks do React para lógica reutilizável.

        Exemplo: useAuth.js para autenticação, useFetch.js para requisições, useWindowSize.js para detectar tamanho da tela.

            Mantém lógica separada e reutilizável, limpando componentes.

    service/
        
        Funções que lidam com comunicação externa: APIs, back-end, serviços de terceiros.

        Pode conter configuração do axios, fetch wrappers, chamadas para CRUD, autenticação.

        Ajuda a centralizar as chamadas HTTP e facilitar manutenção.

    pages/
        
        Componentes que representam páginas/rotas da aplicação.

        Geralmente cada arquivo/folder corresponde a uma rota.

        Exemplo: Home.js, Login.js, Dashboard.js.

            Serve para organizar visualmente e estruturar a navegação.