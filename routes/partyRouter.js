import express  from "express";
const router = express.Router()

import { createParty, deleteParty, getAllParties, getParty, updateParty } from "../controller/partyController.js";
import upload from '../utils/UploadImage.js'

router.post("/parties", upload.single("image"), createParty)
router.get("/parties", getAllParties)
router.get("/parties/:id", getParty)
router.delete("/parties/:id", deleteParty)
router.put("/parties/:id", updateParty)

export default router