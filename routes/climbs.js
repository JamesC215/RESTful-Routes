const express = require('express');
const router = express.Router();
const climbsCtrl = require('../controllers/climbs');
	
router.get('/', climbsCtrl.index);
router.get('/new', climbsCtrl.new);
router.get('/:id', climbsCtrl.show);
router.get('/:id/edit', climbsCtrl.edit);
router.post('/', climbsCtrl.create);
router.post('/:id/equipment/:equipmentid', climbsCtrl.delete);
router.delete('/:id', climbsCtrl.delete)
	
module.exports = router;
