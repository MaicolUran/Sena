const mongoose = require("../config/connection");

// los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
const schemaProducto = new mongoose.Schema({

  referencia: {
    type: [Number,"la referencia debe ser numeria"],
    required: [true, "Es obligatorio"],
  },
  nombre: {
    type: [String, "el nombre debe ser alfanumerico"],
    required: [true, "el nombre es obligatorio"]
  },
  precio:{
    type:[Number,"El valor debe ser solo numerico"],
    min:[0,"El precio no debe ser neagtivo"],
    default: 0.0 //Se usa por defecto pero no se necesitan los corchetes
  }
},{versionKey: false});


const producto = mongoose.model("Productos", schemaProducto);
module.exports = producto;

