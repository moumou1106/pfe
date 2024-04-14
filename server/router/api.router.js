const apiRoute = require("express").Router();
const {getAll, getOne, add, remove, update} = require("../controller/api.controller")

apiRoute.get("/getAll", getAll)
apiRoute.post("/create",add)
apiRoute.get("/getOne/:id", getOne)
apiRoute.delete("/delete/:id", remove)
apiRoute.put("/update/:id",update);

module.exports = apiRoute;