"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _alunoControllers = require('../controllers/alunoControllers'); var _alunoControllers2 = _interopRequireDefault(_alunoControllers);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _alunoControllers2.default.index);
router.post('/', _loginRequired2.default, _alunoControllers2.default.store);
router.get('/:id', _loginRequired2.default, _alunoControllers2.default.show);
router.delete('/:id', _loginRequired2.default, _alunoControllers2.default.delete);
router.put('/:id', _loginRequired2.default, _alunoControllers2.default.update);

exports. default = router;
