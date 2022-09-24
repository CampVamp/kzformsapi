const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Routes
const postRoute = require("./routes/post");
app.use('/posts',postRoute);


app.get('/',(req,res)=>{
    res.send("Home Page");
});


//Connect to Database
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},()=>{
    console.log("Connected to Database");
})

app.listen(3000,console.log("Server is up and running..."));