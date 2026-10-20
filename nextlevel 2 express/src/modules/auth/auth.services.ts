import bcrypt from "bcryptjs"
import { db } from "../../db"
import jwt from "jsonwebtoken"
class AuthService {
  static loginUserIntoDB = async (payload: any) => {
    const { email, password } = payload

    const userData = await db.query(`
        SELECT * FROM users WHERE email = $1
        `, [email])
    if (userData.rows.length === 0) {
      throw new Error("User not found")
    }
    const matchPassword = await bcrypt.compare(password, userData.rows[0].password)
    if (!matchPassword) {
      throw new Error("Invalid password")
    }
    const jwtPayload = {
      id: userData.rows[0].id,
      name: userData.rows[0].name,
      role: userData.rows[0].role,
      isActive: userData.rows[0].is_active,
      email: userData.rows[0].email,
    }
    const token = jwt.sign(jwtPayload, process.env.jwt_secret as string, {
      expiresIn: "1d"
    })
    return { token }
  }

}
export default AuthService
