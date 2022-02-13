const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const User = require('./models/user')

dotenv.config()

const PORT = 3000
const app = express()

mongoose.connect(process.env.DATABASE_STRING, (err) => {
    if (err) {
        console.log("error : " + err)
    } else {
        console.log("Connected to the Database...")
    }
})

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
    let user = new User()
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password

    user.save((err) => {
        if (err) {
            res.json("error : " + err)
        } else {
            res.json("User Successfully Registered...")
        }
    })
})

app.listen(PORT, (err) => {
    if(err)
    console.log('ERROR: ' + err)
    else 
    console.log('Server is running on PORT ' + PORT + '...')
})