import {Router} from 'express';
import controller from './controller/controller';

const router = new Router();

router.post('/user', controller.store);


export default router;