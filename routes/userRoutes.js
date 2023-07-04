const express = require('express');
const { loginController, RegisterController } = require('../controllers/userController');

// router object
const router = express.Router();

//  routers

// POST or Login
router.post('/login', loginController );

// POST or Register
router.post('/register', RegisterController );


module.exports = router;