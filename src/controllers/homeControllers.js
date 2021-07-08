import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'alicia',
      email: 'alicia@aluno.com',
      idade: 19,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
