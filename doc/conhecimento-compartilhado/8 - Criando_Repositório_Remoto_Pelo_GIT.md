Passo a Passo: Do Git Init ao Push no GitHub

🔧 1. Inicialize o repositório Git
No terminal, vá até a pasta do seu projeto:

cd caminho/do/seu/projeto

git init

Isso cria um repositório Git local (pasta .git).

📦 2. Adicione arquivos ao controle de versão

git add .

Adiciona todos os arquivos da pasta ao staging.

📝 3. Faça o primeiro commit

git commit -m "Primeiro commit"

Salva a primeira versão dos arquivos com uma mensagem.

🐙 4. Crie um repositório no GitHub
Acesse https://github.com

Clique em "New repository"

Escolha o nome (ex: meu-projeto)

Não marque “Initialize with README”

Clique em "Create repository"

🌐 5. Conecte o repositório local ao GitHub

Copie a URL HTTPS fornecida pelo GitHub (algo como https://github.com/seu-usuario/meu-projeto.git) e conecte:


git remote add origin https://github.com/seu-usuario/meu-projeto.git

🔀 6. (Opcional) Altere o nome do branch para main
Se seu Git estiver com o branch padrão master, altere para main:

☁️ 7. Envie os arquivos para o GitHub

git push -u origin main

Envia todos os commits para o repositório remoto.

✅ Pronto!
Agora seu repositório está no GitHub com o histórico de commits preservado.