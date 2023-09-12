const { Router } = require('express');
const { cartModel } = require("../models/cart.model");

const cartRouter = Router();

//getList
cartRouter.get('/', async(req,res) => {
    
        const limit = req.query.limit ? +req.query.limit : 10;
        const page = req.query.page ? +req.query.page : 1;

        const manager = new CartManager();
        const carts = await manager.getCarts(limit, page);

        res.send({ result: "success", payload: result })

})

//getOne
cartRouter.get('/:id', async(req,res) => {
    const { id } = req.params;

        const manager = new CartManager();
        const cartId = await manager.getOneCart(id);
        res.send({ status: "error", error: "ID de carrito no encontrado" })
})

//saveProdInCart
cartRouter.post('/:id/products/:pid', async(req, res) => {

})

cartRouter.delete('/:id', )

module.exports = cartRouter;