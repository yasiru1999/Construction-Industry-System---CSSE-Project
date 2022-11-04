const express = require('express');
const router = express.Router();

const PurchaseOrderService = require('../services/purchaseOrder.service');
const SupplyItemService = require("../services/SupplyItems.service");

module.exports = () => {

    router.get('/get-one/:id', PurchaseOrderService.getPurchaseOrder);
    router.get('/', PurchaseOrderService.getPurchaseOrder);
    router.get('/get-all', PurchaseOrderService.getAllPurchaseOrders);
    router.put('/', PurchaseOrderService.updatePurchaseOrder);
    router.post('/add', PurchaseOrderService.addPurchaseOrder);

    return router;
}
