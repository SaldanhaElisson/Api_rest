import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validator: {
          len: {
            args: [3, 255],
            msg: 'nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validator: {
          isEmail: {
            msg: 'email invalida',
          },
        },
      },
      idade: {
        type: Sequelize.STRING,
        defaultValue: '',
        validator: {
          isInt: {
            msg: 'idade precisa ser um número inteiro',
          },
        },
      },
      altura: {
        type: Sequelize.STRING,
        defaultValue: '',
        validator: {
          isFloat: {
            msg: 'Peso precisa ser um numero inteiro ou de ponto flutuante',
          },
        },
      },
    },
    {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
