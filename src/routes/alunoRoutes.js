import { Router } from 'express';
import alunoController from '../controllers/alunoControllers';
import loginRequire from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequire, alunoController.store);
router.get('/:id', loginRequire, alunoController.show);
router.delete('/:id', loginRequire, alunoController.delete);
router.put('/:id', loginRequire, alunoController.update);

export default router;
