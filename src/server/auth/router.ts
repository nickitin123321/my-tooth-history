import { Router } from 'express';
import controller from './controller';

const router = Router();
//const {check} = require('express-validator');

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

export default router;
