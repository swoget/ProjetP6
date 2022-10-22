const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

// Route POST création de compte utilisateur et connexion

router.post('/signup', userCtrl.signUp);
router.post('/login', userCtrl.login);

module.exports = router;