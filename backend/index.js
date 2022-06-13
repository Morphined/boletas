var express = require ('express');
var mongoose = require ('mongoose');
var app = express();
var bodyParser= require('body-parser');
var cors = require('cors');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

var Usuarios_model = require('./models/Usuarios');
var eventos_model = require("./models/eventos");
const eventos = require('./models/eventos');


mongoose.connect('mongodb+srv://proyectoFinal:Bootcamp123.@cluster0.1a8rx.mongodb.net/reventa?retryWrites=true&w=majority').then(function(db){

    console.log('Conectado de manera exitosa a la base de datos')
}).catch(function(err){
    console.log('Ha ocurrido un error: '+ err);
});

app.listen(3000, function(){
    console.log('Servidor iniciado de manera exitosa en el puerto 3000');
});

app.get('/', function(req,res){
    res.redirect('localhost:4200');
});

app.get('/obtenerUsuarios', async function(req,res){

    console.log('Realizando operación de obtención de usuarios en base de datos');
    var busqueda = await Usuarios_model.find();
    res.send(busqueda);

});

app.post('/crearUsuario', async function(req,res){

    var datos = req.body;
    var operacion = new Usuarios_model(datos);
    await operacion.save();
    res.send({respuesta: "Usuario agregado: "+ datos});
    console.log(operacion);

});

app.delete('/deleteUsuario/:id', async function(req,res){

    var id = req.params.id;
    await Usuarios_model.findByIdAndRemove(id);
    res.send({mensaje: 'Usuario eliminado'});

});

app.put('/updateUsuario/:id', async function(req,res){
    var datos = req.params.id;

    var modificar =await Usuarios_model.findbyId(id);
    modificar.nombres = req.body.nombres;
    modificar.apellidos = req.body.apellidos;
    modificar.tipo_identificacion = req.body.tipo_identificacion;
    modificar.numero_identificacion = req.body.numero_identificacion;
    modificar.ciudad = req.body.ciudad;
    modificar.pais = req.body.pais;
    modificar.email = req.body.email;
    modificar.telefono = req.body.telefono;
    modificar.contrasena = req.body.contrasena;
    

    
});

app.post('/hacerLogin/:email', async function(req,res){

    var datos =req.params.email;
    var loginHecho = true;
    var busqueda = await Usuarios_model.findOne({email: datos});
    if (busqueda != ''){
        return {email:datos, login: loginHecho};
    } else{

        return {login: false};

    };


});

app.get('/obtenerUsuario/:email', async function(req,res){

    var email = req.params.email;
    console.log('El email es '+email);
    var busqueda = await Usuarios_model.findOne({email: email});
    console.log('El usuario que corresponde en busqueda es '+busqueda);
    console.log('El nombre de este usuario es: '+ busqueda.nombres);
    res.send(busqueda.nombres);
    


});

app.post('/evento', async function(req,res){
    var datos_recibidos = req.body;
    var doc_insertado = new eventos_model(datos_recibidos);
    await doc_insertado.save();
    res.send({respuesta:"evento agregado"});
    console.log(doc_insertado)

});

app.get('/obtenerEventos', async function(req,res){

    console.log('Realizando operación de obtención de usuarios en base de datos');
    var busqueda = await eventos_model.find();
    res.send(busqueda);

    console.log(busqueda)

});




