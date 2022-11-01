const express = require('express');
const router = express.Router();

const PurchaseOrderService = require('../services/purchaseOrder.service');

module.exports = () => {

    router.get('/:id', PurchaseOrderService.getPurchaseOrder);
    router.get('/', PurchaseOrderService.getPurchaseOrder);

    return router;
}