const requestRoute = require("express").Router();
const {getAll , getOne, add, remove, update} = require("../controller/request.controller")

requestRoute.get("/getAll", getAll);
requestRoute.post("/create", add);
requestRoute.get("/getOne/:id",getOne);
requestRoute.delete("/delete/:id",remove);
requestRoute.put("/update/:id",update);

module.exports = requestRoute;