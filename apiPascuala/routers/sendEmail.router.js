const express = require('express');
const router = express.Router();
const sendEmailController = require('../controllers/sendEmail.controller.js');

router.post('/', sendEmailController);

module.exports = router;
