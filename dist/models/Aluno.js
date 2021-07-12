"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validator: {
          len: {
            args: [3, 255],
            msg: 'nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validator: {
          isEmail: {
            msg: 'email invalida',
          },
        },
      },
      idade: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validator: {
          isInt: {
            msg: 'idade precisa ser um número inteiro',
          },
        },
      },
      altura: {
        type: _sequelize2.default.STRING,
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
} exports.default = Aluno;
