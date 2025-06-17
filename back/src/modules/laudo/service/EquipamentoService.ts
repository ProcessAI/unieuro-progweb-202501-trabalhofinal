import { equipamentoPersistence } from "../persistence/equipamento-persistence";

export class EquipamentoClass {
  private EquipamentoPersistence: equipamentoPersistence;

  constructor() {
    this.EquipamentoPersistence = new equipamentoPersistence();
  }

  // métodos ações para Equipamentos

  // método de criação para equipamentos
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
      // Validações
      if (!idsede) {
        throw new Error("É obrigatório a existência de uma sede!");
      } else if (!idtipoeq) {
        throw new Error("É obrigatório a existência de um tipo de equipamento");
      } else if (equipserie && equipserie.length > 30) {
        throw new Error("A quantidade de caracteres do número de série não pode ser maior que 30");
      } else if (equipmodel && equipmodel.length > 50) {
        throw new Error("A quantidade de caracteres do modelo do equipamento não pode ser maior que 50");
      } else if (equipipv4 && equipipv4.length > 15) {
        throw new Error("É a quantidade de caracteres do IPV4 não pode ser maior que 15 caracteres");
      } else if (equipipv6 && equipipv6.length > 32) {
        throw new Error("É a quantidade de caracteres do IPV6 não pode ser maior que 32 caracteres");
      } else if (equipmac && equipmac.length > 12) {
        throw new Error("A quantidade de caracteres do endereço MAC não pode ser maior que 12");
      } else if (equipanydesk && equipanydesk.length > 10) {
        throw new Error("A quantidade de caracteres do número Anydesk não pode ser maior que 10");
      } else if (equipdwservice && equipdwservice.length > 10) {
        throw new Error("A quantidade de caracteres do Dw Service não pode ser maior que 10");
      }

      const equipamentoCriado = await this.EquipamentoPersistence.create({
        sede: { connect: { idsede } },
        tipoeq: { connect: { idtipoeq } },
        equipamentoserie: equipserie,
        equipamentomodelo: equipmodel,
        equipamentomac: equipmac,
        equipamentoipv4: equipipv4,
        equipamentoipv6: equipipv6,
        equipamentoanydesk: equipanydesk,
        equipamentodw: equipdwservice,
        equipamentoalugado: equipalugado,
      });

      return equipamentoCriado;
    } catch (e) {
      console.log(`Erro ao criar um equipamento: ${e}`);
      throw new Error("Falha na criação do equipamento.");
    }
  }

  async atualizarEquipamento(
    idequipamento: number,
    {
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
    }
  ) {
    try {
      if (!idequipamento) {
        throw new Error("É obrigatório o campo idequipamento!");
      } else if (!idsede) {
        throw new Error("É obrigatório o campo sede!");
      } else if (!idtipoeq) {
        throw new Error("É obrigatório a existência de um tipo de equipamento");
      } else if (equipserie && equipserie.length > 30) {
        throw new Error("A quantidade de caracteres do número de série não pode ser maior que 30");
      } else if (equipmodel && equipmodel.length > 50) {
        throw new Error("A quantidade de caracteres do modelo do equipamento não pode ser maior que 50");
      } else if (equipipv4 && equipipv4.length > 15) {
        throw new Error("É a quantidade de caracteres do IPV4 não pode ser maior que 15 caracteres");
      } else if (equipipv6 && equipipv6.length > 32) {
        throw new Error("É a quantidade de caracteres do IPV6 não pode ser maior que 32 caracteres");
      } else if (equipmac && equipmac.length > 12) {
        throw new Error("A quantidade de caracteres do endereço MAC não pode ser maior que 12");
      } else if (equipanydesk && equipanydesk.length > 10) {
        throw new Error("A quantidade de caracteres do número Anydesk não pode ser maior que 10");
      } else if (equipdwservice && equipdwservice.length > 10) {
        throw new Error("A quantidade de caracteres do Dw Service não pode ser maior que 10");
      }

      const equipamentoAtualizado = await this.EquipamentoPersistence.update(
        idequipamento,
        {
          sede: { connect: { idsede } },
          tipoeq: { connect: { idtipoeq } },
          equipamentoserie: equipserie,
          equipamentomodelo: equipmodel,
          equipamentomac: equipmac,
          equipamentoipv4: equipipv4,
          equipamentoipv6: equipipv6,
          equipamentoanydesk: equipanydesk,
          equipamentodw: equipdwservice,
          equipamentoalugado: equipalugado,
        }
      );

      return equipamentoAtualizado;
    } catch (e) {
      console.log(`Erro ao atualizar o equipamento: ${e}`);
      throw new Error("Falha na atualização de equipamento.");
    }
  }

  async listarEquipamentos() {
    try {
      
      const equipamentosListados = await this.EquipamentoPersistence.findAll();
      return equipamentosListados;
    }
     catch (e) {
      console.log(`Erro ao listar os equipamento: ${e}`);
      throw new Error("Falha na Listagem de equipamento.");
    }
  }

  async ConsuEquipamento(idequipamento: number) {
    try {
      
      const idconvertido = Number(idequipamento)
      
      if (!idconvertido) {
        throw new Error("É obrigatório o id do equipamento para ser consultado");
      }

      const equipamentoConsultado = await this.EquipamentoPersistence.findById(idconvertido);
      
      return equipamentoConsultado;
    
    } catch (e) {
      console.log(`Erro ao Consultar o equipamento: ${e}`);
      throw new Error("Falha na consulta do equipamento.");
    }
  }
}