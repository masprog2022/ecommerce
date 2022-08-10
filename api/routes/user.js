import { Router } from 'express'

const router = Router()

router.get("/usertest", (req, res) => {

    res.send("user test is successfull")

})


export default router