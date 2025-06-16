import { Router } from 'express';
import { createSede,
  getAllSedes,
  getSedeById,
  updateSede,
  deleteSede,
  getSedesByClienteId } from '../service/sede-service'

const router = Router();

router.post('/', createSede);
router.get('/', getAllSedes);
router.get('/:id', getSedeById);
router.put('/:id', updateSede as any);
router.delete('/:id', deleteSede);

export default router;