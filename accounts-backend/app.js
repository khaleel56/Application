const express = require('express')
const cors =require('cors')
const app = express();
 const bodyParser=require('body-parser');


const Router=require('./routers');
const { Parser } = require('pg-protocol/dist/parser');
require('./Model/DbSetup.js')

const Controller = require('./Controller/userController')


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use('/app',Router)


app.listen(5000, ()=>{
console.log('App page')});

