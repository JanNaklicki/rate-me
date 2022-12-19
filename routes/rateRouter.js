const express = require('express');
const router = express.Router();

const rateController = require('../controllers/rate.controller');

/* GET users listing. */
router.get('/:hashed_id', rateController.renderRate);

router.post('/:hashed_id', rateController.rate);

module.exports = router;
