const express = require('express');
const router = express.Router();
const recommendationRoutes = require('./recommendation');

router.use('/recommendations', recommendationRoutes);

module.exports = router;
