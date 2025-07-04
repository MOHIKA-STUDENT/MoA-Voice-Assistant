const express = require('express');
const router = express.Router();
const { askMoA } = require('../controllers/moaController');

// ✅ POST /moa/ask
router.post('/ask', askMoA);

module.exports = router;
