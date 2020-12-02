const mongoose=require('mongoose');

const appointmentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    startTime:{type:String,required:true},
    endTime:{type:String,required:true},
    space:{type:String,required:true}
    
})

module.exports=mongoose.model('Appointment',appointmentSchema);