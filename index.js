const express = require("express")
const mongoose = require("mongoose");
const app = express();
const port = 4000;

app.use(express.json())

app.get("/",(req,res) => {
    res.send("hello");
})

mongoose.connect("mongodb://localhost:27017/chatDb",{
    useNewUrlParser: true, //for avoiding warning
    useUnifiedTopology: true,
}).then(() =>{
    console.log("connection successfuly");
}).catch((error) => {
    console.log(error)
});
  
const users = require("./modules/users/user.routes");
users.userRoutes(app);

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})