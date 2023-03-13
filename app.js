const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3000

//Middlewares

app.use(cors())
app.use(bodyParser.json())

// Import Routes

const postRoute = require('./routes/posts')

app.use('/posts', postRoute)

// app.use('/users', userRoute)

// Routes

app.get('/', (req, res) => {
  res.send('We are on home')
})

// Connect to DB

mongoose.connect(process.env.DB_CONNECTION)

// Listening to the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
