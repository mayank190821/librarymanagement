const exp = require('express')
const { register,login, addBook,getBook } = require('../controller/user.controller')

const router=exp()
//register
router.post("/api/register",register)
//login
router.post("/api/login",login)
router.post("/add/book",addBook)
router.get("/api/fetchbook",getBook)
module.exports={router}