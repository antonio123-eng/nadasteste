import express from 'express'
import routes from './routes/Router.js'
import {connectDB} from "./db/conn.js"
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()


const app = express()
connectDB()
app.use(cors())
const port = process.env.PORT || 5000
app.use(express.json())


app.use("/api", routes)

const start = async() => {
   try {
        app.listen(port, () => console.log("Servidor rodando"))
   } catch (error) {
      console.log(error)
   }
} 
start()