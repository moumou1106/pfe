module.exports = (connection, DataTypes) => {
    const Request = connection.define("request",{
        description:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
        },
        status:{
            type:DataTypes.ENUM("Accepted","Refused","Pending"),
            defaultValue:"Pending"
        },
        date:{
            type:DataTypes.DATE,
            defaultValue:new Date()
        },

    })
    return Request;
}