const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }
},{timestamps:true})

module.export=mongoose.model('Food',foodSchema)