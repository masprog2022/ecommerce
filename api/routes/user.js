import { Router } from 'express'

const router = Router()

router.get("/test1", (req, res) => {

    res.send("user test is successfull")

})

router.post("/test2", (req, res) =>{
    const username = req.body.username
    res.send("your username is: " + username)
})


export default router