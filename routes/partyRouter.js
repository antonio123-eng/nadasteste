import express  from "express";
import { createParty, getAllParties } from "../controller/partyController.js";
const router = express.Router()

router.route("/parties").post(createParty).get(getAllParties)

export default router