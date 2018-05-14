const express = require('express');
const router = express.Router();
const controller = require('../controller/AddressCt')

router.get('/all', controller.getAllAddresses)
module.exports = router;
