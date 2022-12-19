const express = require('express');
const router = express.Router();

const feedbackRouter = require('../controllers/feedback.controller');

/* GET users listing. */
router.get('/:hashedId', feedbackRouter.renderFeedback);

module.exports = router;
