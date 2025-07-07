import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req,res,next) => {
    const token = req.headers['authorization']

    if(!token){
        return res.sendStatus(401)
    }

    const userToken = token.split(" ")[1];

    jwt.verify(userToken, secret_key, (err) => {
        if(err) return res.sendStatus(403);
        next();
    })
}