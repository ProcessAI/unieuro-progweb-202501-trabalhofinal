import { equipamentoPersistence } from "../persistence/equipamento-persistence";

export class EquipamentoClass {
  private EquipamentoPersistence: equipamentoPersistence;

  constructor() {
    this.EquipamentoPersistence = new equipamentoPersistence();
  }

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
      const equipamentoNovo = await this.EquipamentoPersistence.create({
        equipamentoserie: equipserie,
        equipamentomodelo: equipmodel,
        equipamentomac: equipmac,
        equipamentoipv4: equipipv4,
        equipamentoipv6: equipipv6,
        equipamentoanydesk: equipanydesk,
        equipamentodw: equipdwservice,
        equipamentoalugado: equipalugado,
        idsede: idsede,
        idtipoeq: idtipoeq,
      });

      return equipamentoNovo;
    } catch (e) {
      console.error(`Erro ao criar um equipamento: ${e}`);
      throw new Error("Falha na criação do equipamento.");
    }
  }
}
