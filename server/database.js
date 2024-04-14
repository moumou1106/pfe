const {Sequelize, DataTypes}= require("sequelize")
const connection= new Sequelize(
    "api",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql"

    }
)
connection.authenticate()
.then(()=> console.log("db is connected"))
.catch((error)=> console.log(error))
const Users = require("./model/users.model")(connection, DataTypes)
const Api = require("./model/api.model")(connection, DataTypes)
const Request = require("./model/request.model")(connection, DataTypes)

const db = {}
db.Users = Users
db.Api = Api
db.Request = Request


connection.sync({alter: true}).then(()=>{
    console.log("Tables created successfully")
}).catch((error)=>{
    console.log(error)
})





module.exports = db
