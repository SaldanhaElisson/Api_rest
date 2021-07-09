import { Router } from 'express';
import alunoController from '../controllers/alunoControllers';

const router = new Router();

router.get('/', alunoController.index);

export default router;
