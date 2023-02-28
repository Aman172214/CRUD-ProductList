const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const Product = require('./product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(()=>{
        console.log("Mongo connection open!")
    })
    .catch((err)=>{
        console.log(err);
    })
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/products', async (req,res)=>{
    const products = await Product.find({})
    res.render('products/index',{products})
})
app.get('/products/:id',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    res.render('products/show',{product})    
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000");
})
