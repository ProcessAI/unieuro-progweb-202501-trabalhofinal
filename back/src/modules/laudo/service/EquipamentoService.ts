import { equipamentoPersistence } from "../persistence/equipamento-persistence";

export class EquipamentoClass {
  private EquipamentoPersistence: equipamentoPersistence;

  constructor() {
    this.EquipamentoPersistence = new equipamentoPersistence();
  }

  // método para criação do equipamento

  async criarEquipamento({
    equipserie,
    equipmodel,
    equipmac,
    equipipv4,
    equipipv6,
    equipanydesk,
    equipdwservice,
    equipalugado = true,
    idsede,
    idtipoeq,
  }: {
    equipserie?: string;
    equipmodel?: string;
    equipmac?: string;
    equipipv4?: string;
    equipipv6?: string;
    equipanydesk?: string;
    equipdwservice?: string;
    equipalugado?: boolean;
    idsede: number;
    idtipoeq: number;
  }) {
    try {

      // Realizando Validações 

      if(!idsede){

        return `É obrigatório a existência de uma sede!`
      
      }else if (!idtipoeq){

        return `É obrigatório a existência de um tipo de equipamento`
      }
      else if (equipserie && equipserie.length > 30 ) {

        return `A quantidade de caracteres do número de série não pode ser maior que 30`
      }
      else if (equipmodel && equipmodel.length > 50){

        return `A quantidade de caracteres do modelo do equipamento não pode ser maior que 50`
      }
      else if ( equipipv4 && equipipv4.length > 15){
        return `É a quantidade de caracteres do IPV4 não pode ser maior que 15 caracteres`
      }
      else if (equipipv6 && equipipv6.length > 32){

        return `É a quantidade de caracteres do IPV6 não pode ser maior que 32 caracteres`
      }
      else if ( equipmac && equipmac.length > 12){

        return `A quantidade de caracteres do endereço MAC não pode ser maior que 12`
      }
      else if (equipanydesk && equipanydesk.length > 10 ){

        return `A quantidade de caracteres do número Anydesk não pode ser maio que 10`
      }
      else if (equipdwservice && equipdwservice.length > 10 ){

        return `A quantidade de caracteres do Dw Service não pode ser maior que 10`
      }

      
      const equipamentoNovo = await this.EquipamentoPersistence.create({
        idsede, // id da sede
        idtipoeq, // id do tipo de equipamento
        equipamentoserie: equipserie, // serie do equipamento
        equipamentomodelo: equipmodel, // modelo do equipamento
        equipamentomac: equipmac, // endereço físico do equipamento MAC
        equipamentoipv4: equipipv4, // endereço ethernet ipv4 
        equipamentoipv6: equipipv6, // endereço ethernet ipv6
        equipamentoanydesk: equipanydesk, // numero do anydesk para acesso remoto
        equipamentodw: equipdwservice, // nome do agente Dw para acesso remoto
        equipamentoalugado: equipalugado // se o equipamento está alugado ou não
      });
      
      return equipamentoNovo;
  
    } catch (e) {
      console.error(`Erro ao criar um equipamento: ${e}`);
      throw new Error("Falha na criação do equipamento.");
    }
  }
}
