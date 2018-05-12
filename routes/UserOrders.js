const express = require('express');
const router = express.Router();
const controller = require('../controller/UserOrdersCt')

router.get('/order', controller.pushOrder)

module.exports = router;
