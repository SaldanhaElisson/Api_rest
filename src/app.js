import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config(); // configurar o dotenv

import './database';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotosRoutes from './routes/PhotoRoutes';

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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
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
