var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var evento = new Schema({
    nombreEvento:String,
    organizadorEvento:String,
    descripcionEvento:String,
    categoriaEvento:String,
    fechaEvento:Date,
    horaInicioEvento:String,
    horaFinalEvento:String,
    ciudadEvento:String,
    paisEvento:String,
    direccionEvento:String,
    imagenEvento:String

    
});

module.exports = mongoose.model("Eventos", evento);