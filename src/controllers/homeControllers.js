import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'elisson',
      email: 'elisson@aluno.com',
      idade: 19,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
