const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const purchaseOrderSchema = new Schema({
    orderId : {
      type : String,
    },
    itemName : {
      type : String,
    },

    quantity : {
      type : Number,
    },

    approver : {
      type : String,
    },
    siteName : {
        type : String,
        // required: true
    },
    siteManager : {
        type : String,
        // required: true
    },
    siteContactNo : {
        type : String,
        // required: true
    },
    siteAddress : {
        type : String,
        // required: true
    },
    approvedQty : {
        type : Number,
        default : 0
    },

    dueDate : {
        type : String
    },
    priority : {
      type : String
    },

    approvelStatus : {
      type : String,
      default : 'Pending'
    },

    comment : {
      type : String,
      default : 'No Comment'
    },

    condition : {
      type : String,
      default : 'No Condition'
    },

    deliveryStatus : {
      type : String,
      default : 'Pending'
    },

    supCompany : {
      type : String,
      default : 'Not Assigned'
    },

    supName : {
      type : String,
      default : 'Not Assigned'
    },

    supContact : {
      type : String,
      default : 'Not Assigned'
    },

    supAddress : {
      type : String,
      default : 'Not Assigned'
    },
    supID : {type : String, default : 'Not Assigned'},

    totalPrice : {type : Number, default : 0}
    
}, {
    timestamps: true,
});

const PurchaseOrder = mongoose.model("PurchaseOrder", purchaseOrderSchema);

module.exports = PurchaseOrder;