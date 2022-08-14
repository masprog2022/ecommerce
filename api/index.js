const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')
<<<<<<< HEAD
const stripeRoute = require("./routes/stripe");

=======
>>>>>>> 4dfa79291a86b42c4e30c31ee78307108e87a92f

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
<<<<<<< HEAD
app.use("/api/checkout", stripeRoute);
=======
>>>>>>> 4dfa79291a86b42c4e30c31ee78307108e87a92f

app.listen(process.env.PORT ||5000, () => {
    console.log("Backend server is running!")
})