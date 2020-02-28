// Apenas roteamento, por isso não esta importando
// const { Router } = require('express');
import {Router} from 'express';
import SessionController from './controller/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

export default routes;