const db = require("../database")

module.exports = {
    getAll : async (req, res )=>{
        try {
            const allRequests = await db.Request.findAll({})
            res.json(allRequests)
        } catch (error) {
            throw error
        }
    },
    add : async (req, res) => {
        try {
            const newRequest = await db.Request.create(req.body)
            res.json(newRequest)
        } catch (error) {
            throw error
        }
    },
    getOne : async (req, res) => {
        try {
            const oneReqeust = await db.Request.findOne({
                where : {
                    id : req.params.id
                }

            })
            res.json(oneReqeust)
            
        } catch (error) {
            throw error
            
        }
    },
    remove : async (req, res) =>{
        try {
            const deletedRequest = await db.Request.destroy({
                where : {
                id : req.params.id
                }
            })
            res.json(deletedRequest)
        } catch (error) {
            throw error
            
        }
    },
    update : async (req, res) => {
        try {
            const updatedRequest = await db.Request.update(req.body, {
                where : {
                    id : req.params.id
                }
            })
            res.json(updatedRequest)

        } catch (error) {
            throw error
        }

    }


}