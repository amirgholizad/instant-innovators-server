import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import timeSavedRoutes from "./routes/timeSavedRoutes.js";

dotenv.config();

const app = express();
const { CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("Hello from roooooooot!");
  console.log("Incoming Request:", req.method, req.url, req.body);
});

app.use("/generate", emailRoutes);
app.use("/users", userRoutes);
app.use("/activities", activityRoutes);
app.use("/timeSaved", timeSavedRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
