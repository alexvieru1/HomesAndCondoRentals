require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const {MONGO_URL,PORT} = process.env
const register  = require('./controllers/auth')
const login = require('./controllers/auth')
if (!MONGO_URL) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1);
  }

mongoose.connect(MONGO_URL)

app.post('/api/register',register)
app.post('/api/login', login)
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
