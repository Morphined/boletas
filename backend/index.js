var express = require ('express');
var mongoose = require ('mongoose');
var app = express();
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://proyectoFinal:Bootcamp123.@cluster0.1a8rx.mongodb.net/reventa?retryWrites=true&w=majority').then(function(db){

    console.log('Conectado de manera exitosa a la base de datos')
}).catch(function(err){
    console.log('Ha ocurrido un error: '+ err);
});

app.listen(3000, function(){
    console.log('Servidor iniciado de manera exitosa en el puerto 3000');
})