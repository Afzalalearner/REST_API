const express=require('express')
const app=express();
const port=process.env.port||3000;

const homeRouter=require('./routes/homerouter')
const booksRouter=require('./routes/bookrouter')

// app.use(express.json())

app.use('/',homeRouter)
app.use('/books',booksRouter)


app.get('*',(req,res)=>{
    res.status(404);
    res.send('Page Not Found ')
})
app.listen(port,()=>{console.log(`server listening on port ${port}...`)})