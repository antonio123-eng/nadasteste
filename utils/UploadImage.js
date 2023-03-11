import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      let folder = ""
      if(req.url.includes("services")) {
         folder = "services"
      } else if(req.url.includes("parties")) {
         folder = "parties"
      }
      cb(null, `uploads/${folder}`)
   },
   filename: (req, file, cb) => {
      cb(null, Date.now() + String(Math.floor(Math.random() * 10000)) + path.extname(file.originalname))
   }
})

export const upload = multer({storage})
