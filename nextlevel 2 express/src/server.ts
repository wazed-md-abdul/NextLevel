import express from "express"
import type { Request, Response } from "express"
import { Pool } from "pg"
import { config } from "./config/index"

const db = new Pool({
  connectionString : config.connectionString
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
app.get("/api/user", async (req: Request, res: Response) => {
    try {
            const result = await db.query(`
                SELECT * FROM users
            `)
            res.status(200).json(result.rows)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})
app.get("/api/user/:id", async (req: Request, res: Response) => {
  try{
    const result = await db.query(
      `SELECT * FROM users WHERE id = $1`,

      [req.params.id]
    )
    if(result.rows.length === 0) return res.status(404).json({ error: "User not found" })
    res.status(200).json(result.rows[0])

  }
  catch (error) {
    res.status(500).json({ error: error })
  }
})
app.post ("/api/user", async (req: Request, res: Response) => {
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
app.put("/api/user/:id", async (req: Request, res: Response) => {
  try {
    const { name: newName, email: newEmail, age: newAge } = req.body
    const result = await db.query(`
      UPDATE users SET name = COALESCE($1, name), email = COALESCE($2, email), age = COALESCE($3, age) WHERE id = $4
      RETURNING id, name, email, age
    `, [newName, newEmail, newAge, req.params.id])
    if(result.rows.length === 0) return res.status(404).json({ error: "User not found" })
    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error })
  }
})
app.delete("/api/user/:id", async (req: Request, res: Response) => {
  try {
    const result = await db.query(`
      DELETE FROM users WHERE id = $1
      RETURNING id, name, email, age
    `, [req.params.id])
    if(result.rows.length === 0) return res.status(404).json({ error: "User not found" })
    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error })
  }
})
app.listen(port, () => {
    console.log("Server is running on port 3000")
})

export default app
