const express = require('express');
const { generateImage } = require('../controllers/openaiController'); // Fix require statement
const router = express.Router();

router.post('/generateimage', generateImage);

module.exports = router;