const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productCollection = "products";

const productSchema = new mongoose.Schema({
    title: { type: String, require: true, max: 100 },
    description: { type: String, require: true, max: 100 },
    category: { type: String, require: true, max: 100 },
    price: { type: Number, require: true, max: 100000 },
    stock: { type: Number, require: true, max: 1000 },
    code: { type: Number, require: true, max: 1000, unique: true },
    image: { type: String, require: true },
});

productSchema.plugin(mongoosePaginate)
const productModel = mongoose.model(productCollection, productSchema)

module.exports = { productModel }