import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secret_key = process.env.JWT_SECRET_KEY

export const generateToken = (userdata) => {
    
}