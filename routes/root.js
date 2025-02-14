import express from "express";
import "dotenv/config";
import getAIResponse from "../controllers/ai-controller.js";

const root = express.Router();

root.get("/", (req, res) => {
  res.send("Hello from roooooooot!");
});

root.post("/ai-response", getAIResponse);

export default root;
