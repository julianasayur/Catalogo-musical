const express = require('express');
const router = express.Router();
const musicalController = require('../controllers/musicalController');

router.get('/', musicalController.getAllMusical);
router.get('/musical/:id', musicalController.getMusical);

module.exports = router;