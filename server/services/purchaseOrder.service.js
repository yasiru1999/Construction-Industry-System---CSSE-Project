const PurchaseOrder = require('../models/purchaseOrder.model');


const getPurchaseOrder = async(request,response) => {
    try {
        PurchaseOrder.findById(request.params.id, (error, data) => {
            if (error) {
                response.status(500).json({error: error.message});
            } else {
                response.status(200).json({
                    success: true,
                    purchaseOrder: data
                })
            }
        })
    } catch (e) {
        console.log(e);
    }
}

const getPurchaseOrders = async (request, response) => {

    try{
        const purchaseOrders = await PurchaseOrder.find();
        response.status(200).
        json({
            success: true,
            purchaseOrders: purchaseOrders
        })
    } catch (error) {
        response.status(404).json({
            success: false,
            error: error.message
        });
    }
}

module.exports = {
    getPurchaseOrder,
    getPurchaseOrders
}
