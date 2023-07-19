const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/climbs/:id/reviews', reviewsCtrl.create);

module.exports = router;