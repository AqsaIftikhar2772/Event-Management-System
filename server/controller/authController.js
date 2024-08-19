import DcryptPassword from "../helper/dcryptPass.js"
import EncryptPassword from "../helper/encryptPass.js"
import User from "../models/authModle.js"

export const signup = async (req, res) => {
    try {
        const { first_name ,last_name, email, password } = req.body
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: 'username or passsword is wrong'
            })
        }
        let emptyField = []
        if (!first_name) { emptyField.push('first_name') }
        if (!last_name) { emptyField.push('last_name') }
        if (!email) { emptyField.push('email') }
        if (!password) { emptyField.push('password') }
        if (emptyField.length > 0) {
            return res.status(404).json({
                success: false,
                message: `${emptyField.join(", ")} ${emptyField.length === 1 ? 'is' : 'are'}  required`
            })
        }
        const securePaass = await EncryptPassword(password)
        const newUser = await User.create({ first_name ,last_name, email, password: securePaass })
        return res.status(201).json({
            success: true,
            message: 'successfully signup',
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const signin = async (req, res) => {
    try {
        const {email, password} = req.body
        const userExist = await User.findOne({email})
        if(!userExist){
            return res.status(404).json({
                success: false,
                message: 'email or password is incorrect'
            })
        }
        let emptyField = []
        if (!email) { emptyField.push('email') }
        if (!password) { emptyField.push('password') }
        if (emptyField.length > 0) {
            return res.status(404).json({
                success: false,
                message: `${emptyField.join(", ")} ${emptyField.length === 1 ? 'is' : 'are'}  required`
            })
        }
        const securePass = await DcryptPassword(password, userExist.password)
        if(!securePass) {
            return res.status(200).json({
                success: false,
                message: 'email or password is incorrect'
            })
           
        }
        if(email === userExist.email && securePass){
            return res.status(200).json({
                success: true,
                message: `welcome ${userExist.username}`
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}