const express=require('express')
const router=express.Router()

const bookcntlr=require('./../controllers/bookcntlr')


router.get('/',bookcntlr.get)

router.post('/',bookcntlr.post)

router.get('/:id',bookcntlr.getById)

router.delete('/:id',bookcntlr.remove)

router.put('/:id',bookcntlr.put)
module.exports=router;

