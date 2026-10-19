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
      req.body.user = decodedToken
        const userData = await db.query(`
            SELECT * FROM users WHERE id = $1
        `, [decodedToken.id])
        console.log(decodedToken)
        next()
    }
}
export default auth
