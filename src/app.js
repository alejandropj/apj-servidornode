//Alejandro Parra Jimenez
const express = require("express");
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importar rutas
const rutasEstudiante = require('./rutas/estudiante');
const { urlencoded } = require("express");

//configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//funciones iniciales
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'db4free.net',
    user: 'alejandropj',
    password: 'A03092001',
    port: 3306,
    database: 'alejandropjdb'
}, 'single'));
app.use(express.urlencoded({extended:false}));

//rutas
app.use('/',rutasEstudiante);
app.use( express.static( "public" ) );

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//iniciando
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto 3000');
})