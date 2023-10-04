const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    
    apellidop:{type:String,required:true},
    apellidom:{type:String,required:true},
    birthday:{type:String,requiered:true},
    number:{type:String,requiered:true},
    password:{type:String,requiered:true},
    gender:{type:String,required:true},
    email:{type:String,required:true},
    code:{type:String,required:true},
    status:{type:String,required:true,default:"UNIVERIFIED"}
})
module.exports=mongoose.model('User',UserSchema)