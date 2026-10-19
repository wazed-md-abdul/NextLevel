import type { NextFunction, Request, Response } from "express"
import jwt, { type JwtPayload } from "jsonwebtoken"
import { db } from "../db"
const auth =  () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload
        const userData = await db.query(`
            SELECT * FROM users WHERE id = $1
        `, [decodedToken.id])
        req.user = userData.rows[0]
        if (userData.rows.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }
        next()
    }
}
export default auth
