const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierOrderSchema = new Schema({
    supID : {type : String},
    orderId : {type : String},
    orderedItemName : {type : String},
    orderQty : {type : Number},  /*order quantity, approved by procurement staff*/
    totalPrice : {type : String},
    status : {type : String}, /*mention, about approved by procurement staff*/
    dueDate : {type : String},
    approver : {type : String},
    condition : {type : String, default : 'No Condition'},

    siteName : {type : String},
    siteManager : {type : String,},
    siteContactNo : {type : String},
    siteAddress : {type : String},

    deliveryStatus : {type : String, default : 'Pending'},


    supCompany : {type : String, default : 'Not Assigned'},
    supName : {type : String, default : 'Not Assigned'},
    supContact : {type : String, default : 'Not Assigned'},
    supAddress : {type : String, default : 'Not Assigned'},

}, {
    timestamps: true,
});

const supplierOrder = mongoose.model("supplierOrder", supplierOrderSchema);

module.exports = supplierOrder;