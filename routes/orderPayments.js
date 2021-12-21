const express = require('express');
const router = express.Router();

const orderPaymentsHandler = require('./handler/order-payment');

router.get('/', orderPaymentsHandler.getOrders);
router.get('/getbyorderid', orderPaymentsHandler.getOrderDetail);
router.get('/gettracking', orderPaymentsHandler.getOrderTracking);
router.post('/', orderPaymentsHandler.create);
router.post('/createtracking', orderPaymentsHandler.createtracking);

module.exports = router;