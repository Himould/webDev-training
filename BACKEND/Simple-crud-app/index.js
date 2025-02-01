

const express = require('express')
const mongoose = require('mongoose');
const app = express()


app.listen(3000, ()=>{
    console.log('app is running on port 3000')
});

app.get('/', (req, res)=>{
    res.send("hello from node Api")
})

mongoose.connect("mongodb+srv://ogundeleomoniyi:FeQxsoqARVgYJlEj@backenddb.7tyj4.mongodb.net/node-api?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("connected to database");
}) 
.catch(() => {
    console.log("connection fail");
})