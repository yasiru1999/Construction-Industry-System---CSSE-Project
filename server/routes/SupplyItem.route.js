const express = require('express');
const router = express.Router();

const SupplyItemService = require('../services/SupplyItems.service');

module.exports = () => {

    router.get('/', SupplyItemService.getSupllyAllItems);
    router.post('/add', SupplyItemService.addSupplyItem);
    router.put('/:id', SupplyItemService.updateSupplyItem);
    router.delete('/:id',SupplyItemService.deleteItem);
    router.get('/:item',SupplyItemService.getSupplierByItem);
    router.get('/get/:code',SupplyItemService.getSupplierByCode);

    return router;
}