"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _tokenControllers = require('../controllers/tokenControllers'); var _tokenControllers2 = _interopRequireDefault(_tokenControllers);

const router = new (0, _express.Router)();

router.post('/', _tokenControllers2.default.store);

exports. default = router;
