import express  from "express";
const router = express.Router()

import serviceRouter from './serviceRouter.js'
import partyRouter from './partyRouter.js'

router.use("/", serviceRouter)
router.use("/", partyRouter)


export default router