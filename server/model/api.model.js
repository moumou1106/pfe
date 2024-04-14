module.exports = (connection, DataTypes) => {
    const Api = connection.define("api",{
        name:{
            type:DataTypes.STRING,
        },
        description:{
            type:DataTypes.STRING,
        },
        code:{
            type:DataTypes.STRING,
        },
        input:{
            type:DataTypes.STRING,
        },
        output:{
            type:DataTypes.STRING,
        },
        cadreUtilisation:{
            type:DataTypes.STRING,
        },
        url:{
            type:DataTypes.STRING,
        },
        mode:{
            type:DataTypes.ENUM("Prod","preProd"),
            defaultValue:"preProd"
        },


    })
    return Api;
}