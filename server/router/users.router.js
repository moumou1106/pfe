const usersRoute = require("express").Router();
const {getAll,getOne,add,remove,update, login, register,passCheck} = require("../controller/users.controller");
const authProtection = require("../middleware/auth");

usersRoute.get("/getAll",getAll)
usersRoute.post("/login",login)
usersRoute.post("/register",register)
usersRoute.post("/create",add)
usersRoute.get("/getOne",authProtection,getOne)
usersRoute.delete("/delete/:id",remove)
usersRoute.put("/update/:id",update)
usersRoute.post("/passcheck",passCheck)



module.exports = usersRoute;