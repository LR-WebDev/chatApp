const userCotroller = require("./userController")

exports.userRoutes = (app) => {
    app.post("/register", userCotroller.register);
    app.post("/login", userCotroller.login);
    app.get("/userById/:id", userCotroller.userById)
}