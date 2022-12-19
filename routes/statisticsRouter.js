const express = require('express');
const router = express.Router();

const statisticsController = require('../controllers/statistics.conrtoller');

router.get('/:id', statisticsController.renderStatistics);

module.exports = router;
