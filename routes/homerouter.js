const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200)
    res.send('Welcome to Home Page...')
})

module.exports=router;