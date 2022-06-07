var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usuarios = new Schema({
    nombres: String,
    apellidos: String,
    tipo_identificacion: String,
    numero_identificacion: String,
    ciudad: String,
    pais: String,
    email: String,
    telefono: String,
    contrasena: String
});

module.exports = mongoose.model("Usuarios", usuarios);
