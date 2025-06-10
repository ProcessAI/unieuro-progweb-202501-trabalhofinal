import { EnderecoPersistence } from '../persistence/enderecopersistance';

// Criando e exportando a classe EnderecoService
export class EnderecoService {
  // Variável privada com a persistência
  private enderecoPersistence: EnderecoPersistence;

  constructor() {
    this.enderecoPersistence = new EnderecoPersistence();
  }

  // Listar todos os endereços
  async listarEndereco() {
    try {
        return await this.enderecoPersistence.findAll();
    } catch (e) {
      console.log(`Erro ao listar endereços: ${e}`);
      throw e;
    }
  }

  // Visualizar endereço por ID
  async visualizarEndereco(id: number) {
    try {

      const idconvert = Number(id)

      const viewEndereco = await this.enderecoPersistence.findById(idconvert);
     
      
        if (idconvert === undefined || isNaN(idconvert)){
            throw new Error('O campo id é obrigatório');
        }
        
     
      return viewEndereco;
    
    } catch (e) {
      console.log(`Erro ao visualizar o endereço: ${e}`);
      throw e;
    }
  }

  // Criar novo endereço
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
      const cepLimpo = (cepclient ?? '').replace(/\D/g, '');
      const idsede = Number(sedeclient);


      // Fazendo Validações dos parâmetros com if, else if e else, um se encadiado
      if (sedeclient === undefined || isNaN(idsede)) {
        throw new Error('O campo idsede é obrigatório');
      }

      if (!enderecoclient) {
        throw new Error('O campo enderecoclient é obrigatório');
      } else if (!cepLimpo) {
        throw new Error('O campo cepclient é obrigatório');
      } else if (cepLimpo.length !== 8) {
        throw new Error('CEP inválido. Use o formato 00000000');
      } else if (latclient !== undefined && (latclient < -90 || latclient > 90)) {
        throw new Error('Latitude inválida.');
      } else if (lonclient !== undefined && (lonclient < -180 || lonclient > 180)) {
        throw new Error('Longitude inválida.');
      }

      const crendereco = await this.enderecoPersistence.create({
        enderecoendereco: enderecoclient,
        enderecocep: cepLimpo,
        enderecolat: latclient,
        enderecolon: lonclient,
        enderecostatus: statusclient,
        idsede: idsede
      });

      return crendereco;
    
    } catch (e) {
      console.error('Erro ao criar um endereço novo:', e);
      throw e;
    }
  }

  // Atualizar endereço existente
  async atualizarEndereco(
    idclient: number,
    {
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
    }
  ) {
    try {
      
      // O ?? é chamado de operador de coalescência nula
      // Esse trecho usa o operador ?? para verificar se cepclient é null ou undefined
      // Se cepclient tiver um valor válido, ele é usado diretamente.
      // Se cepclient for null ou undefined, então ' ' (string vazia) é utilizada como padrão.
      
      const cepLimpo = (cepclient ?? '').replace(/\D/g, ''); // esse replace remove tudo aqui que não é número
      const idsede = Number(sedeclient);

      const atendereco = await this.enderecoPersistence.update(idclient, {
        enderecoendereco: enderecoclient,
        enderecocep: cepLimpo,
        enderecolat: latclient,
        enderecolon: lonclient,
        enderecostatus: statusclient,
        idsede: idsede
      });

      return atendereco;
    } catch (e) {
      console.log(`Erro ao atualizar o endereço: ${e}`);
      throw e;
    }
  }

  // Deletar endereço
  async deletarEndereco(id: number) {
    try {
      const dtendereco = await this.enderecoPersistence.delete(id);
      return dtendereco;
    } catch (e) {
      console.log(`Erro ao deletar o endereço: ${e}`);
      throw e;
    }
  }

  // Visualizar endereços por sede
  async visualizarSedeEndereco(id: number) {
    const idsede = Number(id);

    if (isNaN(idsede)) {
      throw new Error('ID da sede é inválido ou não informado.');
    }

    try {
      return await this.enderecoPersistence.findBySedeId(idsede);
    } catch (e) {
      console.log(`Erro ao visualizar endereço pela sede: ${e}`);
      throw e;
    }
  }
}
