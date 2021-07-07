import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'alicia',
      sobrenome: 'monteiro',
      email: 'alicia@aluno.com',
      idade: 19,
      peso: 54,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
