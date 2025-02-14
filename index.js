import express from "express";
import "dotenv/config";
import cors from "cors";
import root from "./routes/root.js";

const app = express();

const CORS_ORIGIN = process.env.CORS_ORIGIN;
const PORT = process.env.PORT;

app.use(cors({ options: CORS_ORIGIN }));

app.use(express.json());

app.use("/", root);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
