import { db } from "../../db/index";
import type { CreateProfile, UpdateProfile } from "./profile.interface";

class ProfileService {
  static async createProfile(data: CreateProfile) {
    const result = await db.query(`
      INSERT INTO profiles (user_id, bio, address, phone, gender)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, user_id, bio, address, phone, gender, created_at, updated_at
    `, [data.user_id, data.bio ?? null, data.address ?? null, data.phone ?? null, data.gender ?? null])
    return result.rows[0]
  }

  static async getProfile() {
    const result = await db.query(`
      SELECT id, user_id, bio, address, phone, gender, created_at, updated_at
      FROM profiles
      ORDER BY id
    `)
    return result.rows
  }

  static async getProfileById(id: number) {
    const result = await db.query(`
      SELECT id, user_id, bio, address, phone, gender, created_at, updated_at
      FROM profiles
      WHERE id = $1
    `, [id])
    return result.rows[0]
  }

  static async getProfileByUserId(userId: number) {
    const result = await db.query(`
      SELECT id, user_id, bio, address, phone, gender, created_at, updated_at
      FROM profiles
      WHERE user_id = $1
    `, [userId])
    return result.rows[0]
  }

  static async updateProfile(id: number, data: UpdateProfile) {
    const result = await db.query(`
      UPDATE profiles
      SET bio = COALESCE($1, bio),
          address = COALESCE($2, address),
          phone = COALESCE($3, phone),
          gender = COALESCE($4, gender),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $5
      RETURNING id, user_id, bio, address, phone, gender, created_at, updated_at
    `, [data.bio, data.address, data.phone, data.gender, id])
    return result.rows[0]
  }

  static async deleteProfile(id: number) {
    const result = await db.query(`
      DELETE FROM profiles
      WHERE id = $1
      RETURNING id, user_id, bio, address, phone, gender, created_at, updated_at
    `, [id])
    return result.rows[0]
  }
}

export default ProfileService
