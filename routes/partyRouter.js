import express  from "express";
const router = express.Router()

import { createParty, getAllParties } from "../controller/partyController.js";
import upload from '../utils/UploadImage.js'

router.post("/parties", upload.single("image"), createParty)
router.get("/parties", getAllParties)

export default router