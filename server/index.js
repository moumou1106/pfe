const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000

require("./database")

const usersRoute = require("./router/users.router")
const requestRoute = require("./router/request.router")
const apiRoute = require("./router/api.router")

app.use(cors())
app.use(express.static(__dirname + '/../client/dist'))


app.use(express.json());

app.use("/api/users", usersRoute)
app.use("/api/request", requestRoute)
app.use("/api/api", apiRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
