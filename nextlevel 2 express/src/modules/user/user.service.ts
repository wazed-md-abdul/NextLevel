import { db } from "../../db/index";
import type { CreateUser, UpdateUser } from "./user.interface";
import bcrypt from "bcryptjs"
class UserService {

  static async createUser(data: CreateUser) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const result = await db.query(`
      INSERT INTO users (name, email, password, age)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, email, age
    `, [data.name, data.email, hashedPassword, data.age])
    return result.rows[0]
  }
  static async getUserById(id: number) {
    const result = await db.query(`
      SELECT id, name, email, age
      FROM users
      WHERE id = $1
    `, [id])
    return result.rows[0]
  }
  static async updateUser(id: number, data: UpdateUser) {
    const result = await db.query(`
      UPDATE users SET name = COALESCE($1, name), email = COALESCE($2, email), age = COALESCE($3, age) WHERE id = $4
      RETURNING id, name, email, age
    `, [data.name, data.email, data.age, id])
    return result.rows[0]
  }
  static async deleteUser(id: number) {
    const result = await db.query(`
      DELETE FROM users
      WHERE id = $1
      RETURNING id, name, email, age
    `, [id])
    return result.rows[0]
  }
  static async getAllUsers() {
    const result = await db.query(`
      SELECT id, name, email, age
      FROM users
    `)
    return result.rows
  }
}

export default UserService
