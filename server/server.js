// import packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConfig from "./config/dbConfig.js";
import authRouter from "./router/authRouter.js";
import listRouter from "./router/listRouter.js";
import venueRoute from "./router/venueRouter.js";

// define packages
dotenv.config()
const app = express()
dbConfig()

// important middleware
app.use(express.json())
app.use(cors())

// middleware routers
app.use('/api', authRouter)
app.use('/api', listRouter)
app.use('/api', venueRoute)

const port = process.env.PORT||4000

app.listen(port, ()=>(
    console.log(`the server is running on local host ${port}`)
))


