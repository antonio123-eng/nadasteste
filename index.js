import express from 'express'
import routes from './routes/Router.js'
import {connectDB} from "./db/conn.js"
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use("/files", express.static(path.join(__dirname, "/uploads")))
connectDB()
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