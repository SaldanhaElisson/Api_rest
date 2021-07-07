import dotenv from 'dotenv';

dotenv.config(); // configurar o dotenv

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    // configurando para trabalhar com o middlewares
    this.app.use(express.json()); // configurando para trabalhar com json
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
  }
}

export default new App().app;
