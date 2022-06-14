var mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
var Schema = mongoose.Schema;

var evento = new Schema({
    nombreEvento:String,
    emailCreador:String,
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

    
},
//para registrar hora de guardado
{
    timestamps:true,
}


);

evento.plugin(mongoosePaginate);

module.exports = mongoose.model("Eventos", evento);