const { Router } = require('express');
const UserController = require('../controllers/userController');
const {usernameValidation, passwordValidation} = require('../middlewares/loginValidation');

const router = Router();

router.post('/create', UserController.createUser);
router.post('/login', usernameValidation, passwordValidation, UserController.loginUser);

module.exports = router
