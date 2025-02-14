import initKnex from "knex";
import configuration from "../knexfile.js";
import dotenv from "dotenv";

dotenv.config();

const knex = initKnex(configuration.development);

async function getTimeSaved(req, res) {
  try {
    const timeSaved = await knex("TimeSaved").select("*");
    res.status(200).json(timeSaved);
  } catch (error) {
    console.error("Error fetching time saved:", error);
    res.status(500).json({ error: "Failed to fetch time saved data" });
  }
}

export default getTimeSaved;
