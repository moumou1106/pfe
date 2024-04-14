const db = require("../database")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports = {
    getOneByEmail : async (req,res) => {
        try {
            const User = await db.Users.findOne({where:{email:req.body.email}})
            res.json(User)
        }   
        catch (error) {
            console.log(error)
        }
    },

    register : async (req, res) => {
        try {
            bcrypt.hash(req.body.password, 10)
                .then((hashedPass) => {
                    db.Users.create({
                        ...req.body,
                        password: hashedPass
                    })
                        .then((result) =>
                            res.status(201).json({
                                message: "User Created Successfully",
                                result,
                            })
                        )
                        .catch((error) => {
                            res.status(500).send({
                                message: "Error creating User",
                                error,
                            });
                        });
                });
        } catch (error) {
            res.status(500).send({
                message: "Password was not hashed successfully",
                error,
            });
        }
    },


    passCheck : async (req,res) =>{
        try {
            const User = await db.Users.findOne({where:{email:req.body.email}})
            bcrypt.compare(req.body.password, User.password)
               .then((passCheck) => {
                    if (!passCheck) {
                        res.status(200).send({
                            message: "Password Incorrect",     
                        });
                    }
                    else {
                        res.status(200).json({
                            message: ""
                        });
                    }  
                })
        } catch (error) {
            console.log(error);
        }
    },

    login  : async (req, res) => {
        db.Users.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((User) => {
                console.log(User);
                bcrypt
                    .compare(req.body.password, User.password)
                    .then((passCheck) => {
                        if (!passCheck) {
                            res.status(400).send({
                                message: "Passwords does not match", 
                            
                            });
                        }
                        else {
                            const Token = jwt.sign(
                                {
                                    UserId: User.id,
                                    email: User.email,
                                },
                                "secretKeyForJWT@2024",
                                {expiresIn : "24h"}
                            );
                            res.status(200).json({
                                message: "Login Successfull",
                                UserId: User.id,
                                token: Token
                            });
                        }
                        
                    })
                    .catch((error) => {
                        res.status(400).send({
                            message: "Error creating token",
                            error,
                        });
                    });
            })
            .catch((error) => {
                res.status(404).send({
                    message: "Email not found",
                    error,
                });
            });
    },
    getAll : async (req, res )=>{
        try {
            const allUsers = await db.Users.findAll({})
            res.json(allUsers)
        } catch (error) {
            throw error
        }
    },
    add : async (req, res) => {
        try {
            const newUser = await db.Users.create(req.body)
            res.json(newUser)
        } catch (error) {
            throw error
        }
    },
    getOne : async (req, res) => {
        res.status(200).send(req.user)
    },
    remove : async (req, res) => {
        try {
            const deletedUser = await db.Users.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json(deletedUser)
        } catch (error) { 
            throw error
            
        }
    },
    update : async (req, res) => {
        try {
            const updatedUser = await db.Users.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.json(updatedUser)
            
        } catch (error) {
            throw error
        }

    }
}
