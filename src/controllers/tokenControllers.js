import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        erros: ['Credenciais invalidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        erros: ['Credenciais invalidas'],
      });
    }
    if (!(await user.passwordIsvalid(password))) {
      return res.status(401).json({
        erros: ['senha invalida'],
      });
    }
    // passando o token
    const { id } = user;

    // criando o token a partir do id e o email
    // eslint-disable-next-line max-len
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
    return res.json({ token });
  }
}

export default new TokenController();
