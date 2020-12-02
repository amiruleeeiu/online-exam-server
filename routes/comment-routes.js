const { getComment, createComments } = require('../controllers/comment-controller');

const router=require('express').Router();

router.get('/',getComment)

router.post('/',createComments)

module.exports=router;