import dotenv from 'dotenv';

dotenv.config(); // configurar o dotenv

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotosRoutes from './src/routes/PhotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    // configurando para trabalhar com o middlewares
    this.app.use(express.json()); // configurando para trabalhar  com json
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/aluno/', alunoRoutes);
    this.app.use('/fotos/', fotosRoutes);
  }
}

export default new App().app;
