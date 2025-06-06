// back/src/modules/laudo/service/tipo-laudo-service.ts
// Certifique-se que o caminho está correto e o .js no final.
import { TipoLaudoPersistence } from '../persistence/tipo-laudo-persistence.js';

export const TipoLaudoService = { // Confirme que 'TipoLaudoService' está com 'T' maiúsculo aqui
    listAll: async () => {
        return await TipoLaudoPersistence.findAll();
    },

    findById: async (id: number) => {
        return await TipoLaudoPersistence.findById(id);
    },

    create: async (data: { tipolaudonome: string; tipolaudotemplate: string }) => {
        return await TipoLaudoPersistence.create(data);
    },

    update: async (id: number, data: { tipolaudonome?: string; tipolaudotemplate?: string }) => {
        // Primeiro, verifica se o tipo de laudo existe antes de tentar atualizar
        const existingTipo = await TipoLaudoPersistence.findById(id);
        if (!existingTipo) {
            throw new Error('Tipo de Laudo não encontrado para atualização');
        }
        return await TipoLaudoPersistence.update(id, data);
    },

    delete: async (id: number) => {
        // Primeiro, verifica se o tipo de laudo existe antes de tentar deletar
        const existingTipo = await TipoLaudoPersistence.findById(id);
        if (!existingTipo) {
            throw new Error('Tipo de Laudo não encontrado para exclusão');
        }
        await TipoLaudoPersistence.delete(id);
    }
};