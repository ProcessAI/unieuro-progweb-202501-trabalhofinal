import { Router } from 'express';
import { TipoLaudoService } from '../service/tipo-laudo-service.js'; 

const router = Router();

// Rota para listar todos os tipos de laudo
router.get('/', async (req, res) => {
    try {
        const tiposLaudo = await TipoLaudoService.listAll();
        res.status(200).json(tiposLaudo);
    } catch (error) {
        console.error(error); // Bom para depurar
        res.status(500).json({ message: 'Erro ao buscar tipos de laudo' });
    }
});

// Rota para buscar tipo de laudo por ID
router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const tipoLaudo = await TipoLaudoService.findById(id);
        if (tipoLaudo) {
            res.status(200).json(tipoLaudo);
        } else {
            res.status(404).json({ message: 'Tipo de Laudo não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar tipo de laudo por ID' });
    }
});

// Rota para criar um novo tipo de laudo
router.post('/', async (req, res) => {
    try {
        const novoTipoLaudo = await TipoLaudoService.create(req.body);
        res.status(201).json(novoTipoLaudo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar tipo de laudo' });
    }
});

// Rota para atualizar um tipo de laudo existente
router.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const tipoLaudoAtualizado = await TipoLaudoService.update(id, req.body);
        if (tipoLaudoAtualizado) {
            res.status(200).json(tipoLaudoAtualizado);
        } else {
            res.status(404).json({ message: 'Tipo de Laudo não encontrado para atualização' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar tipo de laudo' });
    }
});

// Rota para deletar um tipo de laudo
router.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        // Sua lógica de delete no service já retorna 204 ou 404
        // A função delete no service deve tratar o caso de não encontrado
        await TipoLaudoService.delete(id); // O service deve lançar um erro ou retornar null se não encontrar
        res.status(204).send(); // 204 No Content para sucesso na exclusão
    } catch (error) {
        if (error instanceof Error && error.message === 'Tipo de Laudo não encontrado para exclusão') {
            res.status(404).json({ message: error.message });
        } else {
            console.error(error);
            res.status(500).json({ message: 'Erro ao deletar tipo de laudo' });
        }
    }
});

export default router;