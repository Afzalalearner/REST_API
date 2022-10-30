const express=require('express');

const home=(req,res)=>{
    res.status(200)
    res.send('Welcome to Home Page...')
}

const health=(req,res)=>{
    res.status(200);
    res.json({status:'up'})

}

module.exports={
    health,
    home,
}