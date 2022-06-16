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

var usuarioActual;


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

app.post('/updateUsuario', async function(req,res){
   
    var datos = req.body; //Recibe datos a actualizar de Angular
    var nombres = datos.nombres;
    var apellidos = datos.apellidos;
    var tipo_identificacion = datos.tipo_identificacion;
    var numero_identificacion = datos.numero_identificacion;
    var ciudad = datos.ciudad;
    var pais = datos.pais;
    var email = datos.email;
    var telefono = datos.telefono;
    console.log("Buscando por correo: "+ usuarioActual.email);
    console.log("Datos desde Angular \n nombre: "+nombres+" apellidos "+apellidos); //Muestra el documento con modelo que viene de Angular 
    await Usuarios_model.findOneAndUpdate({email:usuarioActual.email},{$set:{nombres:nombres,apellidos:apellidos,tipo_identificacion:tipo_identificacion,numero_identificacion:numero_identificacion,ciudad:ciudad,pais:pais,email:email,telefono:telefono}});//busco el documento y lo actualizo
    usuarioActual = datos;
    res.send({respuesta:'Comunicación con Node OK'})


    
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
    usuarioActual= busqueda;
    res.send(busqueda.nombres);
    


});

app.get('/usuarioActual', async function(req,res){

    console.log("Enviando usuario actual "+ usuarioActual);
    res.send(usuarioActual);


});




//////////////////////CRUD eventos



app.delete('/eliminarEvento/:id', async function(req,res){

    var id = req.params.id;
    await eventos_model.findByIdAndRemove(id);
    res.send({mensaje: 'evento eliminado'});

});

app.put('/modificarEvento/:id', async function(req,res){
    var datos = req.params.id;

    var modificar =await eventos_model.findbyId(id);

    modificar.nombreEvento= req.body.nombreEvento,
    modificar.emailCreador= req.body.emailCreador,
    modificar.organizadorEvento=req.body.organizadorEvento,
    modificar.descripcionEvento=req.body.descripcionEvento,
    modificar.categoriaEvento= req.body.categoriaEvento,
    modificar.fechaEvento= req.body.fechaEvento,
    modificar.horaInicioEventoreq.body.horaInicioEventoreq,
    modificar.horaFinalEvento=req.body.horaFinalEvento,
    modificar.ciudadEvento=req.body.ciudadEvento,
    modificar.paisEvento=req.body.paisEvento,
    modificar.direccionEvento=req.body.direccionEvento,
    modificar.imagenEvento=imagenEvento

    

    
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

app.get('/buscarEventos/:parametro', async function(req, res){
    
    let busqueda = await eventos_model.find({$or:[
    {nombreEvento:{$regex: req.params.parametro, $options:'i'}},
    {organizadorEvento:{$regex: req.params.parametro, $options:'i'}},
    {descripcionEvento:{$regex: req.params.parametro, $options:'i'}},
    {categoriaEvento:{$regex: req.params.parametro, $options:'i'}},
    {ciudadEvento:{$regex: req.params.parametro, $options:'i'}},
    {paisEvento:{$regex: req.params.parametro, $options:'i'}},
    {direccionEvento:{$regex: req.params.parametro, $options:'i'}},
]})
    res.send(busqueda)
    console.log(busqueda)

})

