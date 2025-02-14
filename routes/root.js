import express from "express";
import "dotenv/config";

const root = express.Router();

root.get("/", (req, res) => {
  res.send("Hello from roooooooot!");
});

export default root;
