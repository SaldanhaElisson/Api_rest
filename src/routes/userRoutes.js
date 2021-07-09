import { Router } from 'express';
import userController from '../controllers/UserControllers';

import loginRequire from '../middlewares/loginRequired';

const router = new Router();

// index e nem show não deveria existi em um projeto eal
router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequire, userController.update);
router.delete('/', loginRequire, userController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualizar um usuário -> PATCH OU PUT

se a routa está fazendo mais do que esse comandos estamo utilizando routes errado
*/
