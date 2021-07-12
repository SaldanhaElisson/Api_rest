"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json(id, nome, email);
    } catch (e) {
      console.log();
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      // atribues estou dizendo quais atribos quero enviar
      const users = await _User2.default.findAll({ atributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      // aqui estou mostranto so o id. name e email
      const users = await _User2.default.findByPk(req.params.id);
      const { id, name, email } = users;
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['usuario não existe '],
        });
      }

      const newDate = await user.update(req.body);
      const { id, nome, email } = newDate;
      return res.json(id, nome, email);
    } catch (e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['usuario não existe '],
        });
      }

      await user.destroy();
      return res.json('deletado com sucesso');
    } catch (e) {
      return res.json(null);
    }
  }
}

// Index

exports. default = new UserController();
