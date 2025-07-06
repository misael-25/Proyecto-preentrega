import express from 'express'
import productsRouter from './src/routes/products.routes.js'
import authRouter from './src/routes/auth.routes.js'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use("/auth",authRouter)
app.use("/api",productsRouter)
app.use((req,res,next) => {
    res.status(404).send("No se pudo encontrar el recurso")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Puerto ${PORT}`)
})
