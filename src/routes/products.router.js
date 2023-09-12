const { Router } = require('express');
const { productModel } = require("../models/products.model");

const productRouter = Router();

productRouter.get("/", async(req, res) => {
    try {
        let products = await productModel.find()
        res.send({ result: "success", payload: products})
    } catch (error) {
        console.log(error)
    }
});

productRouter.post("/", async(req, res) => { 
    let { title, description, category, price, stock, code, image} = req.body

    if(!title || !description || !category || !price || !stock || !code || !image) {
        res.send({ status: "error", error: "Faltan parámetros" })
    }

    let result = await productModel.create({title, description, category, price, stock, code, image})
    res.send({ result: "success", payload: result })
});

productRouter.put("/:pid", async(req, res) => {
    let { pid } = req.params

    let productToReplace = req.body
    if( !productToReplace.title || !productToReplace.description || !productToReplace.category || !productToReplace.price || !productToReplace.stock || !productToReplace.code || !productToReplace.image) {
        res.send({ status: "error", error: "Faltan parámetros" })
    }

    let result = await productModel.updateOne({_id:pid}, productToReplace)
    res.send({ result: "success", payload: result })
});

productRouter.delete("/:pid", async(req, res) => {
    let { pid } = req.params
    let result = await productModel.deleteOne({_id:pid})
    res.send({result: "success", payload: result})
});


module.exports = productRouter