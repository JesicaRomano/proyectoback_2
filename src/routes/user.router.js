const { Router } = require('express');
const { userModel } = require('../models/user.model');

const userRouter = Router();

userRouter.get("/", async(req, res) => {
    try{
        let users = await userModel.find()
        res.send({result: "success", payload: users})
    } catch (error) {
        console.log(error)
    }
});

userRouter.post("/", async(req, res) => {
    let { nombre, apellido, dni, telefono, mail } = req.body

    if(!nombre || !apellido || !dni || !telefono || !mail) {
        res.send({status: "error", error: "Faltan parámetros"})
    }

    let result = await userModel.create ({ nombre, apellido, dni, telefono, mail })
    res.send({ result: "success", payload: result })
});

userRouter.put("/:uid", async(req, res) => {
    let {uid} = req.params

    let userToReplace = req.body
    if(!userToReplace.nombre || !userToReplace.apellido || !userToReplace.dni || !userToReplace.telefono || !userToReplace.mail){
        res.send({status: "error", error: "Faltan parámetros"})
    }

    let result = await userModel.updateOne({_id:uid}, userToReplace)
    res.send({ result: "success", payload: result })
});

userRouter.delete("/:uid", async(req, res) => {
    let {uid} = req.params
    let result = await userModel.deleteOne({_id:uid})
    res.send({result: "success", payload: result})
});

module.exports = userRouter