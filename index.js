import express from 'express'

const app = express();

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Puerto ${PORT}`)
})

app.get('/', (req,res) => {
    res.send("Hola mundo desde express")
})