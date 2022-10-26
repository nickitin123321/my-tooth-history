const Router = require('express').Router();
const router = new Router();
const controller = require('./controller');
//const {check} = require('express-validator');

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;