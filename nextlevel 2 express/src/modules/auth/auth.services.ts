import bcrypt from "bcryptjs"
import { db } from "../../db"

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
      return userData.rows[0]
    }

}
export default AuthService
