import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      let folder = ""
      if(req.originalUrl.includes("services")) {
         folder = "services"
      } else if(req.originalUrl.includes("parties")) {
         folder = "parties"
      }
      cb(null, `uploads/${folder}`)
   },
   filename: (req, file, cb) => {
      cb(null, String(Math.floor(Math.random() * 10000)) + Date.now() + path.extname(file.originalname))
   }
})

const upload = multer({storage})
export default upload