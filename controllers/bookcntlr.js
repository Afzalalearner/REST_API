const express=require('express')

const books=[
    {id:1,name:'Node.js',price:150},
    {id:2,name:'Express Framework',price:180}
]


const get=(req,res)=>{
    res.status(200);
    res.send(books)
}

const post=(req,res)=>{
    const data=JSON.parse(req.body);
    res.status(200);
    books.push(data);
    console.log(books)
    res.send('created')

}

const getById=(req,res)=>{
    res.status(200);
    const id=+req.params.id;
    res.send(books[id])
}

const remove=(req,res)=>{
    const id=+req.params.id
    res.status(204);
    books.splice(id,1)
    res.send('id deleted')

}

const put=(req,res)=>{
    const id=+req.params.id;
    books[id].name=req.body.name;
    books[id].price=req.body.price;
    res.send('Id Modified')

    
}

module.exports={
   get,
    post,
    getById,
    remove,
    put,
}