const Appointment=require('../models/appointment-model');

exports.allAppointment=async(req,res,next)=>{

    let appointment;
    try{
        appointment=await Appointment.find({})
    }catch(err){
        const error=new Error("Finding Appointment Failed,Please Try Again");
        return next(error);
    }
    res.json(appointment)
}

exports.createAppointment=async(req,res,next)=>{
    let{name,startTime,endTime,space}=req.body;

    let createAppointment;
    try{
        createAppointment=await Appointment({
            name,
            startTime,
            endTime,
            space
        })
    }catch(err){
        const error=new Error("Create Appointment Failed,Please Try Again");
        return next(error);
    }

    try{
        await createAppointment.save();
    }catch(err){
        const error=new Error("Save Appointment Failed,Please Try Again");
        return next(error);
    }
    res.json(createAppointment)
}