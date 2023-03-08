import express from 'express'
import routes from './routes/Router.js'
import {connectDB} from "./db/conn.js"
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()


const app = express()
connectDB()
const port = process.env.PORT || 5000
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "https://golden-mermaid-01e264.netlify.app/")
   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
   app.use(cors())
   next()
})
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