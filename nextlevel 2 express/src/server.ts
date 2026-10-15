import express from "express"
import type { Request, Response } from "express"
import { Pool } from "pg"

const db = new Pool({
  connectionString : "postgresql://neondb_owner:npg_OHBaPGAQN90i@ep-gentle-bread-b345h2qr-pooler.c-4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

const initDb = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        age INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
   `);
    console.log("Table created successfully")
  } catch (error) {
    console.log(error)
  }
}
initDb()
const app = express()
app.use(express.json())
const port = 3000
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World!" })
})
app.post ("/", async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const result = await db.query(`
      INSERT INTO users (name, email, password, age)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, email, age
    `, [req.body.name, req.body.email, req.body.password, req.body.age])
    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error })
  }
})
app.listen(port, () => {
    console.log("Server is running on port 3000")
})

export default app
