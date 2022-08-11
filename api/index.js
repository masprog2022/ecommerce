const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');


//import userRouter from './routes/user.js'
//import authRouter from './routes/auth.js'


require('dotenv').config();


const app = express()

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection Successfull!")).catch((error) => {
    console.log(error)
})

app.use(cors());
app.use(express.json())
app.use("/api/auth", authRouter)
//app.use("/api/users", userRouter)

app.listen(process.env.PORT ||5000, () => {
    console.log("Backend server is running!")
})