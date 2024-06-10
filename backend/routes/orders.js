const express = require('express');
const { getOrders, getPickingList, getPackingList } = require('../controllers/ordersController');

const router = express.Router();

router.get('/', getOrders);
router.get('/picking-list', getPickingList);
router.get('/packing-list', getPackingList);

module.exports = router;
