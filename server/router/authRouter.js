import express from 'express'
import { signin, signup } from '../controller/authController.js'

const authRouter = express.Router()

authRouter.post('/auth/signup',signup)
authRouter.post('/auth/signin',signin)

export default authRouter;