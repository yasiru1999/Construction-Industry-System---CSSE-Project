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


module.exports = {
    getPurchaseOrder
}
