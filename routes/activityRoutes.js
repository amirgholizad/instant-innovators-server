import express from "express";
import getActivities from "../controllers/activityController.js";

const router = express.Router();

// Route to fetch activities
router.get("/", getActivities);

export default router;
