import express from "express";
import { createUser } from "../controllers/createUserController.js";

const router = express.Router();
router.post("/createuser", createUser);

export default router;