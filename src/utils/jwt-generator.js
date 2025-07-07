import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secret_key = process.env.JWT_SECRET_KEY

export const generateToken = (userdata) => {
    const user = {id:userdata.id, password:userdata.password};
    const expiration = {expiresIn: '1h'};

    return jwt.sign(user,secret_key,expiration)
}