const express = require('express');
const router = express.Router();

const PurchaseOrderService = require('../services/purchaseOrder.service');

module.exports = () => {

    router.get('/get-one/:id', PurchaseOrderService.getPurchaseOrder);
    router.get('/', PurchaseOrderService.getPurchaseOrder);
    router.get('/get-all', PurchaseOrderService.getAllPurchaseOrders);
    router.put('/', PurchaseOrderService.updatePurchaseOrder);
    router.get('/getOrders', PurchaseOrderService.getOrders);
    router.get('/get/:state',PurchaseOrderService.geByStatus);
    
    return router;
}