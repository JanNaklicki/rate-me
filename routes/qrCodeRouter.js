const express = require('express');
const router = express.Router();

const qrCodeController = require('../controllers/qrcode.controller');

/* GET users listing. */
router.get('/:id', qrCodeController.renderQrCode);

module.exports = router;
