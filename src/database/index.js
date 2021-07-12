import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connections = new Sequelize(databaseConfig);

models.forEach((model) => { model.init(connections); });

// eslint-disable-next-line no-unused-expressions
models.forEach((model) => { model.associate && model.associate(connections.models); });
