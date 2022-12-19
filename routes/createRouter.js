const express = require('express');
const router = express.Router();

const createController = require('../controllers/create.controller');

/* GET users listing. */
router.get('/:id', createController.renderCreate);

router.post('/:id', createController.createPoll);

module.exports = router;
