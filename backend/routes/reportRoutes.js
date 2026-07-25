import express from "express"
import { createReport } from "../controllers/reportController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post('/reports', authMiddleware, createReport)

export default router;