const express = require('express');
const router = express.Router();
const viewsController = require('./../controllers/viewController');
const authMiddlewers = require('../middlewares/authMiddlewers');

router.use(authMiddlewers.isLoggedIn);
router.get('/', viewsController.getOverview);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignupForm);
router.get('/postNews', viewsController.getCreateNewsForm);
module.exports = router;
