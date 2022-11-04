const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierOrderSchema = new Schema({
    supID : {type : String},
    supCompany : {type : String},
    supName : {type : String},
    supContact : {type : String},
    supAddress : {type : String},

    orderId : {type : String},
    itemName : {type : String},
    orderQty : {type : Number},  /*order quantity, approved by procurement staff*/
    totalPrice : {type : Number},

    status : {type : String}, /*mention, about approved by procurement staff*/
    dueDate : {type : String},
    approver : {type : String},
    condition : {type : String, default : 'No Condition'},

    siteName : {type : String},
    siteManager : {type : String,},
    siteContactNo : {type : String},
    siteAddress : {type : String},

    deliveryStatus : {type : String, default : 'Pending'},

}, {
    timestamps: true,
});

const supplierOrder = mongoose.model("supplierOrder", supplierOrderSchema);

module.exports = supplierOrder;