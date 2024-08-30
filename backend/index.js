const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./routers/user.js')
const connectDB = require('./connectDB.js')

app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, // Allows cookies to be sent with requests
}))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/",router)

connectDB("mongodb://127.0.0.1:27017/socialText")

app.listen(3000,()=>console.log('Listening on 3000...'))