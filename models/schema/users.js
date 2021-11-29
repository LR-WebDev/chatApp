const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
},{
    timestamps : true
})

const user = new mongoose.model("user",usersSchema);
module.exports = user;
