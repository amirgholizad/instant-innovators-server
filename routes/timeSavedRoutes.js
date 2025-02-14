import express from "express";
import getTimeSaved from "../controllers/timeSavedController.js";

const router = express.Router();

// Route to fetch time-saved data
router.get("/", getTimeSaved);

export default router;
