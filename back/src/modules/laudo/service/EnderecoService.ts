import { EnderecoPersistence } from '../persistence/enderecopersistance';

// Criando e exportando a classe EnderecoService
export class EnderecoService {

    // Declarando uma variável privada
    private enderecoPersistence: EnderecoPersistence;

    // Criando um construtor que instancia a classe EnderecoPersistence
    constructor() {
        this.enderecoPersistence = new EnderecoPersistence();
    }

    // Métodos CRUD para os routes

    // Método para listar todos os endereços do cliente
    async listarEndereco() {
        try {
            return await this.enderecoPersistence.findAll();
        } catch (e) {
            console.log(`Aconteceu algum erro ao listar endereços: ${e}`);
            throw e;
        }
    }

    // Método para visualizar um endereço por ID
    async visualizarEndereco(id: number) {
        try {
            const viewEndereco = await this.enderecoPersistence.findById(id);
            return viewEndereco;
        } catch (e) {
            console.log(`Aconteceu algum erro ao visualizar o endereço: ${e}`);
            throw e;
        }
    }

    // Método para criar um novo endereço
    async criarEndereco({
        enderecoclient,
        cepclient,
        latclient,
        lonclient,
        statusclient,
        sedeclient
    }: {
        enderecoclient: string;
        cepclient: string;
        latclient?: number;
        lonclient?: number;
        statusclient?: number;
        sedeclient: number;
    }) {
        try {
            const crendereco = await this.enderecoPersistence.create({
                enderecoendereco: enderecoclient,
                enderecocep: cepclient,
                enderecolat: latclient,
                enderecolon: lonclient,
                enderecostatus: statusclient,
                idsede: sedeclient
            });

            return crendereco;
        } catch (e) {
            console.error(`Erro ao criar um endereço novo:`, e);
            throw e;
        }
    }

    // Método para atualizar um endereço existente
    async atualizarEndereco(idclient: number, {
        enderecoclient,
        cepclient,
        latclient,
        lonclient,
        statusclient,
        sedeclient
    }: {
        enderecoclient?: string;
        cepclient?: string;
        latclient?: number;
        lonclient?: number;
        statusclient?: number;
        sedeclient?: number;
    }) {
        try {
            const atendereco = await this.enderecoPersistence.update(
                idclient,
                {
                    enderecoendereco: enderecoclient,
                    enderecocep: cepclient,
                    enderecolat: latclient,
                    enderecolon: lonclient,
                    enderecostatus: statusclient,
                    idsede: sedeclient
                }
            );

            return atendereco;
        } catch (e) {
            console.log(`Erro ao atualizar o cliente: ${e}`);
            throw e;
        }
    }
    
    //Método para deletar uma endereco de uma sede
    async deletarEndereco(id:number){

        try{

            const dtendereco = await this.enderecoPersistence.delete(id)
            return dtendereco
        
        }catch(e){
            console.log(`$Erro ao deletar o Endereco: ${e}`);
            throw e;
        }
    }

    // Método para Visualizar Endereco pelO SEDE

    async visualizarSedeEndereco(id:number){
        try{

            return await this.enderecoPersistence.findBySedeId(id)

        }catch(e){
            console.log(`Erro ao visualizar endero pela sede: ${e}`)
            throw e
        }
    }
}
