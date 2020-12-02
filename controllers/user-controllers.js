const AppointmentUser=require('../models/appointment-user-model');


exports.getAppointment=async(req,res,next)=>{


    let appointmentUser;
    try{
        appointmentUser=await AppointmentUser.find({});
    }catch(err){
        const error=new Error("Appointment getting Failed,Please Try Again");
        return next(error);
    }
    res.json(appointmentUser)
}

exports.postAppointment=async(req,res,next)=>{

    let{name,email,phone,address,date,time}=req.body;
    console.log(req.body);

    let createAppointmentUser;
    try{
        createAppointmentUser= await AppointmentUser({
            name,
            email,
            phone,
            address,
            date,
            time
        })
    }catch(err){
        const error=new Error("Create Appointment Failed,Please Try Again");
        return next(error);
    }
 
    try{
       await createAppointmentUser.save();
    }catch(err){
        const error=new Error("Create Appointment can not saved,Please Try Again");
        return next(error);
    }

    res.json({createAppointmentUser});
}