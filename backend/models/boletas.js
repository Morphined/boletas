var mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
var Schema = mongoose.Schema;

var boleta = new Schema({
    usuario:String, 
    correo:String,
    celular:Number,
    evento:String,
    cantidad:Number,
    precio:Number,
    moneda:String,
    metodoPago:String,
    fechaPublicacion:Date
},

{
    timestamps:true,
}


);

boleta.plugin(mongoosePaginate);

module.exports = mongoose.model("Boletas", boleta);