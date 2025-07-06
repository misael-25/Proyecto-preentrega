import express from 'express'

const router = express.Router()

router.get('/login',(req,res) => {
    res.send("Login de usuarios")
});

export default router