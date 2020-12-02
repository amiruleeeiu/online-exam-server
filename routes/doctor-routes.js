const { getDoctors, createDoctor } = require('../controllers/doctor-controller');

const router=require('express').Router();

router.get('/',getDoctors)

router.post('/',createDoctor)

module.exports=router;