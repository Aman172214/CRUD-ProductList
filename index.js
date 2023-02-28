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
app.use(express.urlencoded({extended:true}))

app.get('/products/new',(req,res)=>{
    res.render('products/new');
})
app.get('/products', async (req,res)=>{
    const products = await Product.find({})
    res.render('products/index',{products})
})
app.get('/products/:id',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    res.render('products/show',{product})    
})
app.post('/products',async(req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`products/${newProduct._id}`)
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000");
})
