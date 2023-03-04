import express  from "express";
import { createService, getAll } from "../controller/serviceController.js";

const router = express.Router()

router.route("/services").post(createService).get(getAll)

export default router