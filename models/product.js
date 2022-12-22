const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    Author:  { type: String, required: true },
    price:{type: Number, required: true},
    Date:  { type: String, required: true },
    About:{type: String, required: true},
    Qtity:{type: Number, required: true},
    firstName:{type: String},
    lastName:{type: String},
    Phone:{type: Number},
    yourEmail:{type: String},
    Message:{type: String},
    img:
    {
        type:String,
        required:true
    }
   
});

const product = mongoose.model('product', productSchema);

module.exports = product;