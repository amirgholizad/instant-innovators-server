import initKnex from "knex";
import configuration from "../knexfile.js";
import dotenv from "dotenv";

dotenv.config();

const knex = initKnex(configuration.development);

async function getActivities(req, res) {
  try {
    const activities = await knex("Activities").select("*");
    res.status(200).json(activities);
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ error: "Failed to fetch activities" });
  }
}

export default getActivities;
