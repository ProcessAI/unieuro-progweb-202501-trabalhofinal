import { equipamentoPersistence } from "../persistence/equipamento-persistence";

interface EquipamentoDTO {
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
}

export class EquipamentoClass {
  private equipamentoRepo: equipamentoPersistence;

  constructor() {
    this.equipamentoRepo = new equipamentoPersistence();
  }

  private validarDadosBase(dados: EquipamentoDTO) {
    const {
      equipserie,
      equipmodel,
      equipmac,
      equipipv4,
      equipipv6,
      equipanydesk,
      equipdwservice,
      idsede,
      idtipoeq,
    } = dados;

    if (!idsede) throw new Error("É obrigatório a existência de uma sede!");
    if (!idtipoeq) throw new Error("É obrigatório a existência de um tipo de equipamento");
    if (equipserie && equipserie.length > 30) throw new Error("Número de série excede 30 caracteres");
    if (equipmodel && equipmodel.length > 50) throw new Error("Modelo excede 50 caracteres");
    if (equipipv4 && equipipv4.length > 15) throw new Error("IPv4 excede 15 caracteres");
    if (equipipv6 && equipipv6.length > 32) throw new Error("IPv6 excede 32 caracteres");
    if (equipmac && equipmac.length > 12) throw new Error("MAC excede 12 caracteres");
    if (equipanydesk && equipanydesk.length > 10) throw new Error("Anydesk excede 10 caracteres");
    if (equipdwservice && equipdwservice.length > 10) throw new Error("DW Service excede 10 caracteres");
  }

  async criarEquipamento(dados: EquipamentoDTO) {
    try {
      this.validarDadosBase(dados);

      const equipamento = await this.equipamentoRepo.create({
        sede: { connect: { idsede: dados.idsede } },
        tipoeq: { connect: { idtipoeq: dados.idtipoeq } },
        equipamentoserie: dados.equipserie,
        equipamentomodelo: dados.equipmodel,
        equipamentomac: dados.equipmac,
        equipamentoipv4: dados.equipipv4,
        equipamentoipv6: dados.equipipv6,
        equipamentoanydesk: dados.equipanydesk,
        equipamentodw: dados.equipdwservice,
        equipamentoalugado: dados.equipalugado ?? true,
      });

      return equipamento;
    } catch (e) {
      console.error("Erro ao criar equipamento:", e);
      throw new Error("Falha na criação do equipamento.");
    }
  }

  async atualizarEquipamento(id: number, dados: EquipamentoDTO) {
    try {
      if (!id) throw new Error("ID do equipamento é obrigatório!");
      this.validarDadosBase(dados);

      const equipamento = await this.equipamentoRepo.update(id, {
        sede: { connect: { idsede: dados.idsede } },
        tipoeq: { connect: { idtipoeq: dados.idtipoeq } },
        equipamentoserie: dados.equipserie,
        equipamentomodelo: dados.equipmodel,
        equipamentomac: dados.equipmac,
        equipamentoipv4: dados.equipipv4,
        equipamentoipv6: dados.equipipv6,
        equipamentoanydesk: dados.equipanydesk,
        equipamentodw: dados.equipdwservice,
        equipamentoalugado: dados.equipalugado ?? true,
      });

      return equipamento;
    } catch (e) {
      console.error("Erro ao atualizar equipamento:", e);
      throw new Error("Falha na atualização do equipamento.");
    }
  }

  async listarEquipamentos() {
    try {
      return await this.equipamentoRepo.findAll();
    } catch (e) {
      console.error("Erro ao listar equipamentos:", e);
      throw new Error("Falha na listagem de equipamentos.");
    }
  }

  async consultarEquipamento(id: number) {
    try {
      const idNum = Number(id);
      if (!idNum) throw new Error("ID inválido para consulta.");

      return await this.equipamentoRepo.findById(idNum);
    } catch (e) {
      console.error("Erro ao consultar equipamento:", e);
      throw new Error("Falha na consulta do equipamento.");
    }
  }

  async deletarEquipamento(id: number) {
    try {
      if (!id) throw new Error("ID do equipamento é obrigatório!");
      return await this.equipamentoRepo.delete(id);
    } catch (e) {
      console.error("Erro ao deletar equipamento:", e);
      throw new Error("Falha na exclusão do equipamento.");
    }
  }
}
