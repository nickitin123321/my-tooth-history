const Router = require('express').Router();
const authRouter = new Router();
const authController = require('./authController');

authRouter.post('/registration', authController.registration);
authRouter.post('/login', authController.login);
authRouter.get('/users', authController.getUsers);

module.exports = authRouter;