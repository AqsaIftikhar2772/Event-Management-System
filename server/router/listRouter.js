import express from 'express'
import { submitList } from '../controller/listBuss.js'

const listRouter = express.Router()

listRouter.post('/listBuss', submitList)

export default listRouter