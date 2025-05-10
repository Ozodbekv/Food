const mongoose = require("mongoose")
const { type } = require("os")

const restaurantSchema= new mongoose.Schema({
    name:{type:String,required:true},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
},{timestamps: true})

module.exports=mongoose.model('Restaurant',restaurantSchema)


