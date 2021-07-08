import { Router } from 'express';
import userController from '../controllers/UserControllers';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualizar um usuário -> PATCH OU PUT

se a routa está fazendo mais do que esse comandos estamo utilizando routes errado
*/
