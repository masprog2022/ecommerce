import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.js'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection Successfull!")).catch((error) => {
    console.log(error)
})

app.use("/api/user", userRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
})