const exp = require('express');
require ("dotenv").config();

const modeloProductos = require('./src/models/productos.models')

const app = exp();


app.get('/Productos', async (req,res)=>{
    let listaProductos = await modeloProductos.find();
    if(listaProductos){
        res.status(200).json(listaProductos)
    }else{
        res.status(500).json({error})
    }
 });



app.listen(process.env.PORT, ()=>{
    console.log('Aplicacion corriendo: ' + process.env.PORT)
});
