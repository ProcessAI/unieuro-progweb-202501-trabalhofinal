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
    return listCliente;
  };

  async visualizarCliente(idcliente:number){
    const viewCliente = await this.clientePersistence.findById(idcliente);
    return viewCliente;
  };

  // utilizando a forma tradicional descrito na anotação
  async criarCliente(data:{nome:string,status:number}) {
    
    const {nome,status} = data;

    const novoCliente = await this.clientePersistence.create({
      clientenome:nome,
      clientestatus:status,
    })

    console.log('Dados enviados à persistência de Clientes:', {
      clientenome: nome,
      clientestatus: status,
    });

    return novoCliente;
  }
  
  async atualizarCliente(idcliente: number, { nome, status }: { nome: string; status: number }) {
    const clienteAtualizado = await this.clientePersistence.update(idcliente, {
      clientenome: nome,
      clientestatus: status,
    });
    return clienteAtualizado;
  }

  async deletarCliente(idcliente:number){
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

