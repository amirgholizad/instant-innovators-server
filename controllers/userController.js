import initKnex from "knex";
import configuration from "../knexfile.js";
import dotenv from "dotenv";

dotenv.config();

const knex = initKnex(configuration.development);

async function getUsers(_req, res) {
  try {
    const users = await knex("Users").select("*");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
}

export default getUsers;
