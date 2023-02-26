const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=>{
        console.log("Mongo connection open!")
    })
    .catch((err)=>{
        console.log(err);
    })
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
