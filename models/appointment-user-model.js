const mongoose=require('mongoose');

const appointmentUserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true}
})

module.exports=mongoose.model('AppointmentUser',appointmentUserSchema);