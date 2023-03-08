import express  from "express";
const router = express.Router()

import { createParty, getAllParties } from "../controller/partyController.js";
import upload from '../utils/UploadImage.js'

router.route("/parties").post(upload.single("image"), createParty).get(getAllParties)

export default router