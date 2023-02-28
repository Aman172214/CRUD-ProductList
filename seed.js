const mongoose = require('mongoose');
const Product = require('./product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(()=>{
        console.log("Mongo connection open!")
    })
    .catch((err)=>{
        console.log(err);
    })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.99,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
]
Product.insertMany(seedProducts)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })