const express = require('express');
const router = express.Router();

const PurchaseOrderService = require('../services/purchaseOrder.service');
const SupplyItemService = require("../services/SupplyItems.service");

module.exports = () => {

    router.get('/get-one/:id', PurchaseOrderService.getPurchaseOrder);
    router.get('/getOne/:id', PurchaseOrderService.onePurchaseOrder);
    router.get('/get-all', PurchaseOrderService.getAllPurchaseOrders);
    router.put('/', PurchaseOrderService.updatePurchaseOrder);
    router.get('/getOrders', PurchaseOrderService.getOrders);
    router.get('/get/:state',PurchaseOrderService.geByStatus);

    router.post('/add', PurchaseOrderService.addPurchaseOrder);
    router.delete('/delete-one/:id', PurchaseOrderService.deletePurchaseOrder);

    return router;
}
