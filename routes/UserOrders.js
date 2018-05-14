const express = require('express');
const router = express.Router();
const controller = require('../controller/UserOrdersCt')

// router.get('/order', controller.pushOrder)
router.post('/order', controller.pushOrder)

module.exports = router;
