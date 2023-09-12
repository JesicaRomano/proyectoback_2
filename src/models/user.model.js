const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const userCollection = "usuarios";

const userSchema = new mongoose.Schema({
    nombre: { type: String, require: true, max: 100 },
    apellido: { type: String, require: true, max: 100 },
    dni: { type: Number, require: true, max: 10000000000, unique: true },
    telefono: { type: Number, require: true, max: 10000000000 },
    mail: { type: String, require: true, max: 50 }
});

userSchema.plugin(mongoosePaginate)
const userModel = mongoose.model(userCollection, userSchema)

module.exports = { userModel }