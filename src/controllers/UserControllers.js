import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: 'saldanhelisson',
        email: 'saldanhaelisson@gmail.com',
        password: '1234569',
      });
      return res.json(novoUser);
    } catch (e) {
      console.log();
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const users = await User.findByPk(id);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['usuario não existe '],
        });
      }

      const newDate = await user.update(req.body);
      return res.json(newDate);
    } catch (e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

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

export default new UserController();
