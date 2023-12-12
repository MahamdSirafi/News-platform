const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
router.post('/signup', authController.signup);
router.route('/logout').post(authController.logout);
router.post('/login', authController.login);

module.exports = router;
