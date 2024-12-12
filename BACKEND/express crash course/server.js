// import express from "express";
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;


// middleware for path
// app.use(express.static(path.join(__dirname, 'public')))



// app.get("/",  (req, res) => {
//     res.send('It worked');
// })

app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
})

// ROUNTING
// app.get("/about",  (req, res) => {
//     res.send('<h1>this is the about page</h1>');
// })

// SERVING HTML PAGES -2methods, absolute path sendFile or express builtin middlewares
// bring in the path module

// app.get("/",  (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })
// app.get("/about",  (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })

// Creating Static folder using the express middleware

// WORKING WITH JSON
let posts = [
    {id:1, title: 'post one'},
    {id:2, title: 'post two'},
    {id:3, title: 'post three'}
]

app.get("/api/posts",  (req, res) => {
    res.json(posts);
})