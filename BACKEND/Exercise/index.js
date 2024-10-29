import express from 'express'
const app = express()

const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello')
})
app.get('/about', function (req, res) {
  res.send('<h1>About me</h1><p>My name is ogundele omoniyi</p>')
})
app.get('/contact', function (req, res) {
  res.send('<h2>Contact me</h2><p>my contact is +23470393</p>')
})

app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
})