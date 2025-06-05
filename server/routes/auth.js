const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js')

router.post('/signup', controller.signupUser);

router.post('/login', controller.loginUser);

router.post('/logout', controller.logoutUser);

router.get('/auth-check', controller.authCheck);


module.exports = router;