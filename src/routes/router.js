const express = require('express')
const router = express.Router()

const modeloProductos = require('../models/productos.models')

router.get('/productos', async (req,res)=>{
    let listaProductos = await modeloProductos.find();
    if(listaProductos){
        res.status(200).json(listaProductos)
    }else{
        res.status(500).json({error})
    }
 });


module.exports = router



