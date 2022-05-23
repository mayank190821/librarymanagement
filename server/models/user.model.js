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
    }
});

const adminSchema = new mongoose.Schema({
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
});

module.exports = {user:mongoose.model("users",userSchema),admin:mongoose.model("admin",adminSchema)}