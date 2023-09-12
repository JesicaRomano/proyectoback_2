const express = require('express');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const userRouter = require('./routes/user.router');
const productRouter = require('./routes/products.router');
const cartRouter = require('./routes/cart.router')

const app = express();
const port = 8080;

app.use(express.json());

const environment = async () => {
    await mongoose.connect("mongodb+srv://eladiaromano:yQar44iaIbqLK9ZZ@cluster0.0dsw5jg.mongodb.net/") 

    console.log("Conectado a la base de datos");

}
environment(); 

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", productRouter);

app.listen(port, () => console.log(`Server run Express port: ${port}!`));