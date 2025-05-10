const mongoose = require("mongoose")
const Restaurant = require("./Restaurant")
const { type } = require("os")

const orderSchema=new mongoose.Schema({
    name:{type:String,required:true},
    
    user:{type:mongoose.Schema.ObjectId,ref:User,required:true},
    dostavchik:{type:moongoose.Schema.ObjectId,ref:Dostavchik,required:true}

},{timestamps:true})

module.exports=mongoose.model('Order',orderSchema)

