const express=require('express');
const router=express.Router();
const homecntlr=require('./../controllers/homectrlr')

router.get('/',homecntlr.home)

router.get('/health',homecntlr.health)

module.exports=router;