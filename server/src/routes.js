import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

// A partir daqui, todas as rodas necessitam do token de autenticação
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
