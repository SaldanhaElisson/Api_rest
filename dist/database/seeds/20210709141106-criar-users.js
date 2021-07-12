"use strict";const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [{
    nome: 'elisson',
    email: 'teste@gmail.com',
    password_hash: await bcrypt.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'elisson1',
    email: 'teste1@gmail.com',
    password_hash: await bcrypt.hash('1234568', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'elisson2',
    email: 'teste2@gmail.com',
    password_hash: await bcrypt.hash('1234567', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },

  ], {}),

  down: async (queryInterface, Sequelize) => {

  },
};
