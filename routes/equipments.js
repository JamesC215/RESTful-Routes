const express = require('express');
const router = express.Router();
const equipmentsCtrl = require('../controllers/equipments');


router.get('/equipments/new', equipmentsCtrl.new);
router.post('/equipments', equipmentsCtrl.create);
router.post('/climbs/:id/equipments', equipmentsCtrl.addToList);

module.exports = router;