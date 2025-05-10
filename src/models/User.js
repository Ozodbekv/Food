const mongoose = require("moongose")

const userSchema = new moongose.Schema({
    username:{type:String,required:true,unique:ture},
    password:{type:String,required:true},
    passportId:{type:String,required:true,unique:true},
    role:{
        type:String,
        enum:['owner','dostavchik','mijoz'],
        required:true
    }
},{ timestamps:true })

module.exports=mongoose.model('User',userSchema)




