import { SedePersistence } from '../persistence/sede-persistence';

export class SedeService {
  private persistence = new SedePersistence();

  async listar() {
    return await this.persistence.findAll();
  }

  async visualizarSede(id: number) {
    return await this.persistence.findById(id);
  }

  async deletar(id: number) {
    return await this.persistence.delete(id);
  }

 async atualizar(id: number, data: { sedenome?: string; sedestatus?: number }) {
    return await this.persistence.update(id, data);
  }
}

   