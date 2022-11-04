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

const getAllPurchaseOrders = async(request,response) => {
    try {
        PurchaseOrder.find({}, (error, data) => {
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

const addPurchaseOrder = async (request, response) => {

    const Order = new PurchaseOrder(request.body);

    await Order.save((error, Order) => {
        if(error){
            response.status(500).json({ error: error.message });
            console.log(error.message)
        }
        else{
            response.status(200).
            json({
                success: true,
                Order: Order
            })
        }
    });
}

//Update purchase order
const updatePurchaseOrder = async (request,response) => {
    const po = new PurchaseOrder(request.body);
    console.log(po);
    await PurchaseOrder.findByIdAndUpdate(request.body._id,po,
        (error,po) => {
            if(error){
                console.log(error);
                response.status(500).json({ error: error.message });
            }
            else{
                response.status(200).
                json({
                    success: true,
                    po:po
                })
            }
        });
}

module.exports = {
    getPurchaseOrder,
    getPurchaseOrders,
    getAllPurchaseOrders,
    updatePurchaseOrder
    getAllPurchaseOrders,
    addPurchaseOrder
}
