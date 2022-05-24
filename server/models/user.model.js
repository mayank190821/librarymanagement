const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        max:20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min:8,
        max: 50,
    },
    role:{
        default:"user",
        type: String,
        max: 50,

    }
});


const Books = new mongoose.Schema({
    bookName:{
        type:String,
        max:50,
    },
    authorName:{
        type:String,
        max:50,
    },
    bookPrice:{
        type:String,
        max:50
    }
})
module.exports = {User:mongoose.model("users",userSchema),Books:mongoose.model('book',Books)}