const express = require('express');
const router = express.Router();
const climbsCtrl = require('../controllers/climbs');
	
router.get('/', climbsCtrl.index);
router.get('/new', climbsCtrl.new);
router.get('/:id', climbsCtrl.show);
router.post('/', climbsCtrl.create);
	
module.exports = router;
