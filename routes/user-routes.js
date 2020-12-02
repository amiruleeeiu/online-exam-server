const {  getAppointment, postAppointment } = require('../controllers/user-controllers');

const router=require('express').Router();

router.get('/',getAppointment)

router.post('/',postAppointment)

module.exports=router;