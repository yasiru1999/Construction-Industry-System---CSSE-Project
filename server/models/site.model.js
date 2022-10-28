const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    siteName: {type:String,required:true,trim:true},
    siteManagerName:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    address: {type:String,required:true,trim:true},
    budget:{type:Number,required:true},
});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;


