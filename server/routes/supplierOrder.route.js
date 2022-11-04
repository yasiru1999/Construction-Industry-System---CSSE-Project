const express = require('express');
const router = express.Router();

const SupplierOrderService = require('../services/supplierOrder.service');

module.exports = () => {

    router.post('/add', SupplierOrderService.addSupplierOrder);


    return router;
}