const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const PORT = 3000
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Get Requests
app.get("/", (req, res) => {
    res.json("Hello World!!!")
})

// Post Requests
app.post("/", (req, res) => {
    res.json("Hello World!!!")
    console.log(req.body)
})

app.listen(PORT, (err) => {
    if(err)
    console.log('ERROR: ' + err)
    else 
    console.log('Server is running on PORT ' + PORT)
})