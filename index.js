const express=require('express')
const app=express();
const port=process.env.port||3000;

const homeRouter=require('./routes/homerouter')

app.use('/',homeRouter)


app.get('*',(req,res)=>{
    res.status(404);
    res.send('Page Not Found ')
})
app.listen(port,()=>{console.log(`server listening on port ${port}...`)})