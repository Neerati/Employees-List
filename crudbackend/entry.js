//Require
var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');
var route=require('./routes/routes');
var Employee=require('./model/employee');


var app=express();

//MongoDB connection
mongoose.connect('mongodb://localhost:27017/employeelist');

//add middleware 
app.use(cors());
app.use(bodyParser.json());
app.use('/api', route);


//PORT to listen to
app.listen(3000, ()=>{
    console.log('server has been started');
})