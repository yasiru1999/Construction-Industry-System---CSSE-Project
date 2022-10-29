const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const purchaseOrderSchema = new Schema({

    SiteName : {
        type : String,
        // required: true

    },
    SiteManager : {
        type : String,
        // required: true
    },
    SiteContactNo : {
        type : String,
        // required: true
    },
    SiteAddress : {
        type : String,
        // required: true
    },
    Item : {
        type : String,
        // required: true
    },

    OrderQty : {
        type : String,
        // required: true
    },

    ApprovedQty : {
        type : String,
        default : '0'
    },

    DueDate : {
        type : String
    },

    Approver : {
      type : String
    },

    Priority : {
      type : String
    },

    ApprovelStatus : {
      type : String,
      default : 'Pending'
    },

    Comment : {
      type : String,
      default : 'No Comment'
    },

    Condition : {
      type : String,
      default : 'No Condition'
    },

    DeliveryStatus : {
      type : String,
      default : 'Pending'
    },

    SupCompany : {
      type : String,
      default : 'Not Assigned'
    },

    SupName : {
      type : String,
      default : 'Not Assigned'
    },

    SupContact : {
      type : String,
      default : 'Not Assigned'
    },

    SupAddress : {
      type : String,
      default : 'Not Assigned'
    }
    
}, {
    timestamps: true,
});

const PurchaseOrder = mongoose.model("PurchaseOrder", purchaseOrderSchema);

module.exports = PurchaseOrder;