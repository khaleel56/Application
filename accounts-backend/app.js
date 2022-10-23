const express = require('express')
const cors =require('cors')
const app = express();
 const bodyParser=require('body-parser');


const Router=require('./routers');
const { Parser } = require('pg-protocol/dist/parser');
require('./Model/DbSetup.js')

app.use(cors());
app.use('/app',Router)
// app.use(express.urlencoded({extended:false}));
// app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(5000, ()=>{
console.log('App page')});

