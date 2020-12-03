const express=require('express');
const bodyParser = require('body-parser')
const userRoutes=require('./routes/user-routes')
const appointmentRoutes=require('./routes/appointment-routes')
const doctorRoutes=require('./routes/doctor-routes');
const commentRoutes=require('./routes/comment-routes');
const mongoose=require('mongoose')
require('dotenv').config()
cors = require('cors')

app = express()
app.use(cors())

app.use(bodyParser.json())

app.use('/user',userRoutes);
app.use('/appointment',appointmentRoutes);
app.use('/doctor',doctorRoutes)
app.use('/comment',commentRoutes);

app.use((err,req,res,next)=>{
    res.json({message:err.message || 'An Unknown error occured'});
})


mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pa181.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
        useNewUrlParser: true
    }).then(data=>{
        console.log("server running");
    })

app.listen(process.env.PORT || 3001,()=>{
    console.log("Server Running Successfully");
})
