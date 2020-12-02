const Doctor=require('../models/doctor-model');

exports.getDoctors=async(req,res,next)=>{
    let doctors;
    try{
        doctors=await Doctor.find({});
    }catch(err){
        const error=new Error("Getting Doctor Failed,Please Try Again");
        return next(error);
    }

    res.json(doctors);
}

exports.createDoctor=async(req,res,next)=>{
    let{name,email,password}=req.body;

    let createDoctor;
    try{
        createDoctor=await Doctor({
            name,
            email,
            password
        })
    }catch(err){
        const error=new Error("Create doctor Failed,Please Try Again");
        return next(error);
    }

    try{
        await createDoctor.save();
    }catch(err){
        const error=new Error(" Failed,Please Try Again");
        return next(error);
    }
    res.json(createDoctor);

}