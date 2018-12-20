const mongoose  = require('mongoose');

var productSchema =  new mongoose.Schema({
    name:{
        type:String,
       required:true
    },
    description:{
        type:String,
       required:true
    },
    price:{
        type:Number,
        required:true
    }
   
},{timestamps: true});



module.exports =mongoose.model('products',productSchema);