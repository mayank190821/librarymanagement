const exp = require('express')
const mongo = require('mongoose')
require('dotenv/config')
const app = exp()
const {router} = require("./routes/api.routes") 
// rVC8GkjoQHJmBjmz
app.use("/",router)
app.listen(process.env.PORT,()=>{
    console.log("Connected at ",process.env.PORT)
})
mongo.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connected Successful")
}).catch((err)=>{
    console.log(err)
})