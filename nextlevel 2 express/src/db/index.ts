import { Pool } from "pg";
import { config } from "../config/index";

export const db = new Pool({
  connectionString : config.connectionString
})

export const initDb = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        age INTEGER NOT NULL,
        role VARCHAR(20) NOT NULL DEFAULT 'user',
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
   `);
    await db.query(`
      CREATE TABLE IF NOT EXISTS profiles(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL UNIQUE REFERENCES users(id)  ON DELETE CASCADE,
        bio TEXT,
        address TEXT,
        phone VARCHAR(20),
        gender VARCHAR(10),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
      `)
    console.log("Table created successfully")
  } catch (error) {
    console.log(error)
  }
}
