/* Criando a camada de serviço */

// importando classe da camada persistence para conexão com o banco de dados
import { clientePersistence } from "../persistence/cliente-persistence";

export class ClienteService{

  // criando um objeto privado do tipo ClientePersistence
    
  private clientePersistence:clientePersistence;

  constructor(){

    this.clientePersistence = new clientePersistence();
  }

  async listarCliente(){
    const listCliente = await this.clientePersistence.findAll();
    
    console.log(typeof(listCliente));
    return listCliente;
  };

  async visualizarCliente(idcliente:number){
    const viewCliente = await this.clientePersistence.findById(idcliente);
    return viewCliente;
  };

  // versão atualizada para as vallidações de criarCliente
  async criarCliente(data: { nome: string; status: number }) {
    const { nome, status } = data;
  
    // validações
    if (!nome || typeof nome !== 'string') {
      throw new Error("O campo 'nome' é obrigatório e deve ser uma string.");
    }
  
    if (status !== 0 && status !== 1) {
      throw new Error("O campo 'status' deve ser 0 (inativo) ou 1 (ativo).");
    }
  
    // chama o método da persistência para inserir no banco
    const novoCliente = await this.clientePersistence.create({
      clientenome: nome,
      clientestatus: status,
    });
  
    // apenas para debug: mostra os dados enviados
    console.log('Cliente enviado à persistência:', { nome, status });
  
    return novoCliente;
  }
  
  
  // versão atualizada para as validações de atualizarCliente
  async atualizarCliente(idcliente: number, { nome, status }: { nome: string; status: number }) {
    if (!idcliente || typeof idcliente !== 'number') {
      throw new Error("O 'idcliente' é obrigatório e deve ser um número.");
    }
  
    if (!nome || typeof nome !== 'string') {
      throw new Error("O campo 'nome' é obrigatório e deve ser uma string.");
    }
  
    if (status !== 0 && status !== 1) {
      throw new Error("O campo 'status' deve ser 0 (inativo) ou 1 (ativo).");
    }
    
    // atualiza os dados no banco
    const clienteAtualizado = await this.clientePersistence.update(idcliente, {
      clientenome: nome,
      clientestatus: status,
    });
  
    return clienteAtualizado;
  }

  // versão atualizada para as verficações de deletarCliente
async deletarCliente(idcliente: number) {
  // validação simples do ID
  if (!idcliente || typeof idcliente !== 'number') {
    throw new Error("ID do cliente inválido.");
  }

   // deleta o cliente usando o método da camada de persistência
  const clienteDeletado = await this.clientePersistence.delete(idcliente);
  return clienteDeletado;
}

}  


/* 
    ANOTAÇÃO: 

    DICA: Os nomes usados no Prisma devem ser iguais aos do model.
    Se você usar nomes diferentes na aplicação, precisa "converter"
    
    Essa sintaxe: { nome, status }: { nome: string; status: number } 
    faz a desestruturação de um objeto recebido como parâmetro e já define seu tipo. 
    { nome, status }: { nome: string; status: number } 
    significa que a função espera um objeto com as chaves nome (string) e status (number).
    É uma forma mais curta de acessar e tipar os dados ao mesmo tempo.

    Na forma convencional, a função recebe um objeto completo como parâmetro:
    async criarCliente(data: { nome: string; status: number }). Dentro da função, 
    você acessa os campos usando data.nome e data.status. 
    É útil quando você quer mais clareza ou reutilizar o tipo em vários lugares.

    Exemplo da forma Tradicional: 

      type ClienteInput = { nome: string; status: number };

      async criarCliente(data: ClienteInput) {
      const { nome, status } = data;

      // Validação simples
      if (!nome || typeof nome !== 'string') {
        throw new Error("Nome é obrigatório e deve ser uma string.");
      }

      if (typeof status !== 'number') {
        throw new Error("Status deve ser um número.");
      }

      // Persistência no banco (camada de repositório)
      const novoCliente = await this.clientePersistence.create({
        clientenome: nome,
        clientestatus: status,
      });

      return novoCliente;

    Exemplo com a forma Moderna:

    class ClienteService {
      constructor(private clientePersistence: any) {}

      async criarCliente({ nome, status }: { nome: string; status: number }) {
        // Validação simples
        if (!nome || typeof nome !== 'string') {
          throw new Error("Nome é obrigatório e deve ser uma string.");
        }
        if (typeof status !== 'number') {
          throw new Error("Status deve ser um número.");
        }

        // Persistência no banco (simulado)
        const novoCliente = await this.clientePersistence.create({
          clientenome: nome,
          clientestatus: status,
        });

        return novoCliente;
      }
    }

  // Exemplo de uso:
  
  
    const clienteService = new ClienteService({
      create: (data: any) => Promise.resolve({ idcliente: 1, ...data }),
    });

    clienteService.criarCliente({ nome: "Ana", status: 1 })
      .then(cliente => console.log("Cliente criado:", cliente))
      .catch(err => console.error("Erro:", err.message));


  Camada de serviço desestrutura nome e status, e os adapta para os campos esperados
  no banco (clientenome, clientestatus);

  Camada de persistência faz o update via Prisma, usando where e data corretamente.

*/

