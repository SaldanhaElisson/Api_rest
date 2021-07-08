import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
// bcrypt server para criar um rash
export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        // estou falando que caso não tenha o valor no campo o valor padrão vai ser vazio
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            // validate é um module, que também está disponivel dentro do sequilize
            // Aqui estmoas dizendo o tamanho minimo e maximo do campo
            // no args, o primeiron numero no array é o min e ultimo é o max
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'email invalido',
            // isEmail -> é usado para valida um email
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Campo nome deve ter entre 6 e 50 caracteres',

          },
        },
      }, // VIRTUAL ->não vai está no banco de dados, só vai servir para criar um
      // rash

    },
    {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      // na linha 53 estou transformano o password em hash e jogando dentro do campo passowrd_rash
      // no segundo paremetero dentro de .hash estou definindo  o tamanho do rash
      }
    });
    // addHook -> adiciona/faz  uma ação, no primeiro parametro eu digo quando ele faz a ação
    // nesse caso estamos dizendo que el e vai fzr a função( transformar password em hash)
    // ante de salvar 'beforeSave'
    return this;
  }

  passwordIsvalid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
  // tranformando a senha em hash e verificando
}
