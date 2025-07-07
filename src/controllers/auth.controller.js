import { generateToken } from "../utils/jwt-generator.js"
const admin_user = {
    id:1,
    username:'admin',
    password:'admin'
}

export const login = async(req,res) => {
    const {username, password} = req.body;
    if(username === admin_user.username && password === admin_user.password){
        const token = generateToken(admin_user)
        res.json({token})
    }else{
        res.sendStatus(401)
    }
}

