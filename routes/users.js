
const express = require('express');
const router = express.Router();
/*const { APP_NAME } = process.env;

router.get('/', function(req, res, next) {

    res.send(APP_NAME);
} );*/

const usersHandler = require('./handler/users');
const verifyToken = require('../middlewares/verifyToken');


router.post('/login', usersHandler.login);
router.post('/logout', verifyToken, usersHandler.logout);

module.exports = router;
