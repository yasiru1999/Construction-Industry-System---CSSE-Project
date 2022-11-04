const mongoose = require('mongoose');

const SupplyItemSchema = new mongoose.Schema({
    SupItemID: {type:String},
    ItemName:{type:String},
    Price:{type:String},
    qty: {type:String},
    supID: {type:String},
    supName: {type:String}
});

const SupplyItems = mongoose.model('SupplyItems', SupplyItemSchema);

module.exports = SupplyItems;