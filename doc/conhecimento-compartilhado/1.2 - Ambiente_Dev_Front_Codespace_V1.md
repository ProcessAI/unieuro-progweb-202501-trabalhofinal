1 - Visão Geral

    Este documento descreve a configuração para rodar um ambiente front-end React com TypeScript
    usando GitHub Codespaces, incluindo suporte para ESLint, Prettier, testes e hot reload.

2 - Dependências principais

    React 19.x

    React Scripts 5.x

    TypeScript 4.9.x

    ESLint com plugins para React e TypeScript

    Prettier para formatação de código

    Bibliotecas de teste React Testing Library e Jest

3 - Arquivo recomendado .devcontainer/devcontainer.json

    {
    "name": "React + TypeScript Frontend",
    "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
    "postCreateCommand": "npm install",
    "customizations": {
        "vscode": {
        "extensions": [
            "dbaeumer.vscode-eslint",
            "esbenp.prettier-vscode",
            "eamodio.gitlens",
            "ms-vscode.vscode-typescript-tslint-plugin",
            "ms-azuretools.vscode-docker"
        ],
        "settings": {
            "editor.formatOnSave": true,
            "eslint.format.enable": true,
            "eslint.alwaysShowStatus": true,
            "editor.codeActionsOnSave": {
            "source.fixAll": true,
            "source.fixAll.eslint": true
            }
        }
        }
    },
    "forwardPorts": [3000],
    "remoteUser": "node",
    "mounts": [
        "source=${localEnv:HOME}/.npmrc,target=/home/node/.npmrc,type=bind,consistency=cached"
    ]
    }

4 - Explicação dos pontos principais

    Imagem base: Node.js 20 com ambiente JavaScript pronto.

    postCreateCommand: instala as dependências automaticamente ao abrir o Codespace.

    Extensões VS Code recomendadas:

    ESLint para linting e correções automáticas.

    Prettier para formatação.

    GitLens para controle de versão.

    Plugin TypeScript e Docker para suporte avançado.

    Configurações do editor:

        Formatação automática ao salvar.

        Correção automática via ESLint ao salvar.

    Porta 3000 aberta para o servidor React.

    Usuário remoto: node, para compatibilidade e segurança.

    Mount do .npmrc local para acesso a pacotes privados, caso necessário.

5 - Scripts importantes do package.json

    npm start: roda o React em modo desenvolvimento com hot reload.

    npm build: gera a versão otimizada para produção.

    npm test: executa testes.

    npm eject: expõe configurações internas do react-scripts (uso avançado).

6 - Uso prático no Codespace

    Abra/crie o Codespace no repositório que contém o .devcontainer/.

    Aguarde o ambiente ser preparado.

    No terminal integrado, execute:
    
        npm start
    
    O servidor React estará disponível em localhost:3000 para preview no Codespace.

    Modifique seu código com suporte a lint e formatação automática.

    O servidor React estará disponível em localhost:3000 para preview no Codespace.

    Modifique seu código com suporte a lint e formatação automática.

