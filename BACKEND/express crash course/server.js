import express from "express";
import posts from './routes/post.js'
import logger from './middleware/logger.js'
// import path from 'path'
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// const  __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 8080;

// BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// LOGGER MIDDLEWARE

app.use(logger);


// ROUTES
app.use('/api/posts', posts);

// middleware for path
// app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
})

// FILE MOVED TO A SEPERATE FILES

