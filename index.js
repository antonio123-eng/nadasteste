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
console.log(__dirname)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
connectDB()
app.use("/files", express.static(path.join(__dirname, "/uploads")))
app.use(express.urlencoded({extended: false}))
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