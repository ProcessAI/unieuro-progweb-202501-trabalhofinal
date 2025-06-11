// filepath: /Users/danielzakhourjreige/Downloads/unieuro-progweb-202501-trabalhofinal-laudinho-5/back/src/modules/laudo/model/laudo-model.ts

export interface Laudo {
  id: number;
  descricao: string;
  data: Date;
  tipoEquipamentoId: number; // Assuming a relationship with tipoeq
}