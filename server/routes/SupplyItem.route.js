const express = require('express');
const router = express.Router();

const SupplyItemService = require('../services/SupplyItems.service');

module.exports = () => {

    router.get('/', SupplyItemService.getSupllyAllItems);
    router.post('/add', SupplyItemService.addSupplyItem);
    router.put('/:id', SupplyItemService.updateSupplyItem);
    router.delete('/:id',SupplyItemService.deleteItem)

    return router;
}