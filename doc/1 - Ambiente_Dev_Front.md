O OBJETIVO DESSA ANOTAÇÃO É A CRIAÇÃO DO AMBIENTE E CONFIGURAÇÃO DO AMBIENTE DEV FRONT-END COM TYPESCRIPT E REACT

1 - PRÉ-REQUISISTOS:

    - Node.js, acesse: https://nodejs.org/en/download  
    - NPM, use o comando: npm i
    - TYPESCRIPT, use o comando: npm install typescript --save-dev

2 - CRIANDO O AMBIENTE FRONT-END DA FORMA PADRÃO:

    node -v
    npm -v

3 - CRIAR UM PROJETO REACT COM TYPESCRIPT USANDO O CREATE REACT APP:

    Introdução: O Create React App (CRA) é uma ferramenta 
        oficial do time do React que configura automaticamente
        um projeto React com tudo que você precisa: Webpack, Babel, suporte a JSX, TS, etc.
        É ótimo para quem quer aprender como funciona por baixo dos panos, pois é o padrão mais "manual" e usado há muito tempo.

    Dentro da pasta front use o comando: 
        
        npx create-react-app meu-app --template typescript



    No nosso caso, dentro da pasta front-end ele já criar todo um desenvolvimento, depois você irá reoganizar
    a estrutura do front-end já documentada! em: Structure-front_end.md
    

    Apos: Realizar o comando, automaticamente já será gerada uma estrutura do front-end padrão:

        front/
        ├── public/                # Arquivos públicos (favicon, index.html)
        ├── src/                   # Código da aplicação
        │   ├── App.tsx            # Componente principal
        │   ├── index.tsx          # Ponto de entrada do React
        │   └── react-app-env.d.ts # Configuração do React com TypeScript
        |
        ├── .gitignore             # configurando o git para ignorar arquivos 
        ├── tsconfig.json          # Config do TypeScript
        ├── package.json           # Dependências e scripts
        └── README.md              # Instruções

    Não esquecer cde colocar no arquivo.gitignore:  

        arquivos pesados
        pasta: node_modules

    expecificação:

        npx: roda um pacote sem precisar instalar

        create-react-app: ferramenta oficial do React

        meu-app: nome do seu projeto/pasta

        --template typescript: adiciona suporte a TypeScript

    Caso tenha problemas: 

        Pelo explorador de arquivos, siga exatamente esse caminho: C:\Users\pasta_específica_do_erro\AppData\Roaming\npm

        exemplo: C:\Users\aluno\AppData\Roaming\npm 

        Se a pasta npm não existir, crie uma pasta vazia com exatamente o nome: npm


4 - Estruturando E CONFIGURANDO O AMBIENTE CONFORME A STRUTURA ACORDADA NO DOCUEMENTO: STUCTURE-FRONT-END:

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

5 - INSTALAR E CONFIGURAR ESLINT + PRETTIER

    Dentro da pasta front-end 

    use o comando: npm install -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier



6 - Criando os arquivos.json .eslintrc.json e .prettierrc:

    na pasta front-end vamos criar os arquivos:

        front/
        ├── node_modules/
        ├── public/
        ├── src/
        ├── .eslintrc.json       ✅ AQUI
        ├── .prettierrc.json     ✅ AQUI
        ├── package.json
        ├── tsconfig.json
        └── ...


    Contéudo dentro do arquivo .eslintrc.json: 
    

        {
            "parser": "@typescript-eslint/parser",
            "extends": [
                "plugin:react/recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier"
            ],
            "plugins": ["react", "@typescript-eslint"],
            "rules": {
                "react/react-in-jsx-scope": "off"
        },
            "settings": {
                "react": {
                "version": "detect"
                }
            }
        }


    Contéudo crento do arquivo .prettierrc:

        {
            "semi": true,
            "singleQuote": true,
            "trailingComma": "all"
        }

7 - INSTALAR AS LIBS: axios

    dentro da past front

    use o comando: npm install axios

8 - CONFIGURAR O TSCONFIG: Não esquecer de usar o chagpt para verificar se a configuração foi configurada corretamente. Esse cara no tsconfig.jon gerado pelo React

        "compilerOptions": {
            "baseUrl": "src",
            "paths": {
                "@components/*": ["components/*"],
                "@hooks/*": ["hooks/*"],
                "@pages/*": ["pages/*"],
                "@service/*": ["service/*"],
                "@contents/*": ["contents/*"]
        }
    }

9 - DICA! 

    Sempre que criar ou alterar esses arquivos, 
    é bom reiniciar o VS Code ou recarregar 
    a janela (Ctrl+Shift+P > Reload Window) 
    para que o ESLint e o Prettier reconheçam as configurações.