const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')
const stripeRoute = require("./routes/stripe");


//import userRouter from './routes/user.js'
//import authRouter from './routes/auth.js'


require('dotenv').config();




mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection Successfull!")).catch((error) => {
    console.log(error)
})

app.use(cors());
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)
app.use("/api/orders", orderRouter)
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT ||5000, () => {
    console.log("Backend server is running!")
})