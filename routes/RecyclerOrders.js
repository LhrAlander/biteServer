const express = require('express');
const router = express.Router();
const controller = require('../controller/RecyclerOrderCt')

router.post('/unchecked', controller.getUncheckedOrders)

module.exports = router;
