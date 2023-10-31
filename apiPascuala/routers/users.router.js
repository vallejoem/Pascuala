const express = require('express');
const router = express.Router();
const {getAll,createUser,deleteUser} = require('../controllers/users.controller');
const validateUser = require('../request/user.request');

router.get('/',getAll);

router.post('/',validateUser,createUser);

router.delete('/',deleteUser);

module.exports = router;