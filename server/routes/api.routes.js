const exp = require('express')
const { register } = require('../controller/user.controller')

const router=exp()
router.post("/api/register",register)
modules.export=router