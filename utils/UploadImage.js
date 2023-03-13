import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      let folder = ""
      if(req.url.includes("services")) {
         folder = "services"
      } else if(req.url.includes("parties")) {
         folder = "parties"
      }
      cb(null, path.join(__dirname, `../uploads/${folder}`))
   },
   filename: (req, file, cb) => {
      cb(null, String(Date.now()) + String(Math.floor(Math.random() * 10000)) + path.extname(file.originalname))
   }
})

export const upload = multer({storage})
