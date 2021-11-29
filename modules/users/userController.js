const user = require("../../models/schema/users")
const bcrypt = require("bcrypt")

exports.register = async(req,res) => {
    try{
        const userObj = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(userObj.password,salt);
        userObj.password = hashPassword;
        const newUser = new user(userObj);
        const data = await newUser.save();
        res.status(200).send(data)

    }catch(err){
        res.status(500).send("some error occured");
    }
},
exports.login = async() => {
    
},
exports.userById = async(req,res) => {
    try{
        const userId = req.params.id;
        const userData = await user.findById(userId);
        if(!userData){
            res.status(404).send("no user found")
        }
        res.status(200).send(userData)
    }catch(err){
        res.status(500).send("some error occured")
    }
}