import express from "express";
import getAIResponse from "../controllers/emailController.js";

const router = express.Router();

// Route to generate AI email suggestion
router.post("/", getAIResponse);

export default router;
