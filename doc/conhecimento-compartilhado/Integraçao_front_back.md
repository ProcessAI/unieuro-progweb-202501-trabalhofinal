ANOTAÇÃO PARA FAZER INTEGRAÇÃO BACK-END E FRONT-END

A integração entre seu back-end (Express + Prisma + Node + TypeScript) e seu front-end (React + TypeScript) é feita via consumo de APIs HTTP, geralmente com fetch, axios ou bibliotecas de gerenciamento de estado como React Query.

Aqui está um guia prático e direto para fazer essa integração corretamente:


    Configure o CORS no back-end:
    
        - instale e habilite CORS no seu Express:

            npm install cors

   
    // No seu index.ts ou app.ts do back-end
    
        import cors from 'cors';
        
        app.use(cors({
            origin: 'http://localhost:8080', // ajuste para o endereço do front
            credentials: true
        }));

    - Certifique-se que o Express esteja escutando numa porta acessível:

        app.listen(3000, () => {
            console.log('Servidor rodando em http://localhost:3000');
        });
    
    - Faça requisições no front-end:
    
        Você pode usar axios ou fetch. Aqui vai um exemplo com axios:

        instale: npm install axios

        // services/clienteService.ts
        import axios from 'axios';

        const api = axios.create({
        baseURL: 'http://localhost:3000', // backend URL
        });

        export const criarCliente = async (dados: { nome_cliente: string; status: string }) => {
            const response = await api.post('/clientes', dados);
            return response.data;
        };

        export const listarClientes = async () => {
            const response = await api.get('/clientes');
            return response.data;
        };

        export const buscarCliente = async (id: number) => {
            const response = await api.get(`/clientes/${id}`);
            return response.data;
        };

        export const atualizarCliente = async (id: number, dados: any) => {
            const response = await api.put(`/clientes/${id}`, dados);
            return response.data;
        };

        export const deletarCliente = async (id: number) => {
            const response = await api.delete(`/clientes/${id}`);
            return response.data;
        };


        Use essas funções no React:


            // exemplo em ClienteList.tsx
            import { useEffect, useState } from 'react';
            import { listarClientes } from '../services/clienteService';

            const ClienteList = () => {
            const [clientes, setClientes] = useState([]);

            useEffect(() => {
                listarClientes().then(setClientes);
            }, []);

            return (
                <div>
                <h1>Lista de Clientes</h1>
                <ul>
                    {clientes.map((c: any) => (
                    <li key={c.idcliente}>{c.nome}</li>
                    ))}
                </ul>
                </div>
            );
            };

            export default ClienteList;

Práticas recomendadas:


    Use .env nos dois lados (VITE_API_URL, PORT, etc.)

    Se quiser controle de cache, loading, error, considere usar React Query

    Use Zod ou Yup para validação de dados nas duas pontas





