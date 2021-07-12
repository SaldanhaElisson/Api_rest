"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllers = require('../controllers/UserControllers'); var _UserControllers2 = _interopRequireDefault(_UserControllers);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// index e nem show não deveria existi em um projeto eal
router.get('/', _UserControllers2.default.index);
router.get('/:id', _UserControllers2.default.show);

router.post('/', _UserControllers2.default.store);
router.put('/', _loginRequired2.default, _UserControllers2.default.update);
router.delete('/', _loginRequired2.default, _UserControllers2.default.delete);

exports. default = router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualizar um usuário -> PATCH OU PUT

se a routa está fazendo mais do que esse comandos estamo utilizando routes errado
*/
