const SupplierOrder = require('../models/supplierOrder.model');

const addSupplierOrder = async (request, response) => {

    const supplierOrder = new SupplierOrder(request.body);

    console.log(supplierOrder);


    await supplierOrder.save((error, supplierOrder) => {
        if(error){
            response.status(500).json({ error: error.message });
            console.log(error.message)
        }
        else{
            response.status(200).
            json({
                success: true,
                supplierOrder: supplierOrder
            })
        }
    });
}


module.exports = {
    addSupplierOrder
}