const exp = require('express');
require ("dotenv").config();

const modeloProductos = require('./src/models/productos.models')

const app = exp();

const enrutador=require('./src/routes/router');

app.use('/v1',enrutador)

//app.get('/Productos',);



app.listen(process.env.PORT, ()=>{
    console.log('Aplicacion corriendo: ' + process.env.PORT)
});
