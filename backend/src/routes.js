// Apenas roteamento, por isso não esta importando
// const { Router } = require('express');
import {Router} from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from './controller/SessionController';
import HouseController from './controller/HouseController';
import DashboardController from './controller/DashboardController';
import ReserveController from './controller/ReserveController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/house',upload.single('thumbenil'), HouseController.store);
routes.get('/house', HouseController.index);
routes.put('/house/:house_id',upload.single('thumbenil'),HouseController.update);
routes.delete('/house',HouseController.destroy);

routes.get('/dashboard',DashboardController.show);

routes.post('/house/:house_id/reserve',ReserveController.store);
routes.get('/reserve', ReserveController.index);
routes.delete('/reserve/cancel', ReserveController.destroy);

export default routes;