import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    res.json('ola');
  }
}

export default new AlunoController();
