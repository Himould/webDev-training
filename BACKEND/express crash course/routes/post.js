import express from "express";
const router = express.Router();


// ROUTING

// router.get("/",  (req, res) => {
//     res.send('It worked');
// })

// router.get("/about",  (req, res) => {
//     res.send('<h1>this is the about page</h1>');
// })

// SERVING HTML PAGES -2methods, absolute path sendFile or express builtin middlewares
// bring in the path module

// router.get("/",  (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })
// router.get("/about",  (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })

// Creating Static folder using the express middleware

// router.use(express.static(path.join(__dirname, 'public')))


// WORKING WITH JSON
let posts = [
    {id:1, title: 'post one'},
    {id:2, title: 'post two'},
    {id:3, title: 'post three'}
]

// GET ALL POST

// router.get("/",  (req, res) => {
//     res.json(posts);
// })

// GET SINGLE POSTrouter

router.get("/:id",  (req, res) => {
    // console.log(req.params.id)
    const id = parseInt(req.params.id)
       const post = posts.find((post) => post.id === id)

       if (!post) {
          return  res.status(404).json({msg: `a post with id of ${id} does not exist`})
       } res.status(200).json(post)

    // res.json(posts.filter((post) => post.id === id));
})

// QUERRY STRING

router.get("/",  (req, res) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
     return res.json(posts.slice(0, limit))
    }
    res.json(posts);
});

// STATUS CODE

router.get("/",  (req, res) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
     return res.status(200).json(posts.slice(0, limit))
    }
    res.status(200).json(posts);
});

export default router;