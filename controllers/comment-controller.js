const Comment=require('../models/comment-model');

exports.getComment=async(req,res,next)=>{
    let comments;
    try{
        comments=await Comment.find({});
    }catch(err){
        const error=new Error("Getting Comment Failed,Please Try Again");
        return next(error);
    }

    res.json(comments);
}

exports.createComments=async(req,res,next)=>{
    let{email,subject,message}=req.body;

    let createComment;

    try{
        createComment=await Comment({
            email,
            subject,
            message
        })
    }catch(err){
        const error=new Error("Create Comment Failed,Please Try Again");
        return next(error);
    }

    try{
        await createComment.save();
    }catch(err){
        const error=new Error("Save Comment Failed,Please Try Again");
        return next(error);
    }
    res.json(createComment);

}