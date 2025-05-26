/*
    Lembrando... Para fazer o Copilador Acompanhar as modificações feitas no arquivo.ts
    
    Use o comando tsc -w para que o typescript fique monitorando as alterações
    e compile automaticamente o arquivo javascript

    Lembrando que você pode fazer multiplas configurações no pack.json para executar em tempo real o script
    typescript. Exemplo:

        "scripts": {
            "dev": "tsx watch src/index.ts",
            "dev:admin": "tsx watch src/admin.ts",
            "dev:api": "tsx watch src/api.ts",
            "dev:test": "tsx watch src/teste.ts"
            }


    Para rodar em tempo real, após ter configurado o TypeScript e o Pack.jon use: 
        
        npm run dev;
    
    Você também pode usar: 

    npx ts-node arquivo.ts # porém não verifica modificações

    npx ts-node-dev --respawn arquivo.ts # Basicamente vai fazer a mesma função do: npm run dev

*/

let nome:string = "Guilherme Henrique"

console.log(nome);

console.log(nome);
