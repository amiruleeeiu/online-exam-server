const { allAppointment, createAppointment } = require('../controllers/AppointmentController');

const router=require('express').Router();

router.get('/',allAppointment)

router.post('/',createAppointment)

module.exports=router;