const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const { restart } = require('nodemon');

//const User = require("../models/User")



// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),

    });

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    } catch (error) {
      res.status(500).json(error)
    }


})


// Login 

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username}) 

        if(!user){
            return res.status(401).json({ error: 'Wrong credentials!'})
        }
       // !user && res.status(401).send("Wrong credentials!")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)


         const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        if(Originalpassword !== req.body.password){
            return res.status(401).json({ error: 'Wrong credentials!'})
        }

       // password !== req.body.password && res.status(401).send("Wrong credentials!")

        const { password, ...others } = user._doc

        return res.status(200).json(others)


    }catch(err){
      return res.status(500).json(err) 
    }
   
})

module.exports = router