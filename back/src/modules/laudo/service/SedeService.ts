import { SedePersistence } from '../persistence/SedePersistence';

export class SedeService {
  private persistence = new SedePersistence();

  async listar() {
    return await this.persistence.listar();
  }

  async visualizarSede(id: number) {
    return await this.persistence.buscarPorId(id);
  }

  async deletar(id: number) {
    return await this.persistence.deletar(id);
  }

 async atualizar(id: number, data: { nomesede?: string; status?: number }) {
    return await this.persistence.atualizar(id, data);
  }
}

   