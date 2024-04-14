const { response } = require("express")
const db = require("../database")

module.exports = {
    getAll : async (req, res )=>{
        try {
            const allApi = await db.Api.findAll({})
            res.json(allApi)
        } catch (error) {
            throw error
        }
    },
    add : async (req, res) => {
        try {
            const newApi = await db.Api.create(req.body)
            res.json(newApi)
        } catch (error) {
            throw error
        }
    },
    getOne : async (req , res) => {
        try {
            const oneApi = await db.Api.findOne({
                wwhere : {
                    id : req.params.id
                }
            })
            res.json(oneApi)
            
        } catch (error) {
            throw error
        }
    },
    remove : async (req, res) => {
        try {
            const deletedApi = await db.Api.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json(deletedApi)
        } catch (error) {
            throw error
        }
    },
    update : async (req, res) => {
        try {
            const updateApi = await db.Api.update(req.body, {
                where : {
                    id : req.params.id
                }
            })
            res.json(updateApi)

        } catch (error) {
            throw error
        }

    }

}