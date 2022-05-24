const exp = require('express')
const { register,login, addBook,getBook, deleteBook } = require('../controller/user.controller')

const router=exp()
//register
router.post("/api/register",register)
//login
router.post("/api/login",login)
router.post("/add/book",addBook)
router.get("/api/fetchbook",getBook)
router.post("/delete/book",deleteBook)
router.post("/update/book",deleteBook)
module.exports={router}