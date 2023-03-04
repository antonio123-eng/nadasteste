import express from 'express'
import routes from './routes/Router.js'
import {connectDB} from './db/conn.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())


app.use("/api", routes)

const start = async() => {
   try {
        await connectDB(process.env.MONGO_URI) 
        app.listen(port, () => console.log("Servidor rodando"))
   } catch (error) {
      console.log(error)
   }
} 
start()