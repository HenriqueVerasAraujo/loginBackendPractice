const { Router } = require('express');
const UserController = require('../controllers/userController');

const router = Router();

router.post('/create', UserController.createUser);
// router.post('/login', UsersController.login);

module.exports = router
