import express from "express";
import { getPendingReports } from "../controllers/getPendingReportController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router()

router.get('/reports/pending', authMiddleware, getPendingReports)

export default router;