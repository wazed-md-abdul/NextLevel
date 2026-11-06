import jwt from "jsonwebtoken";
import { db } from "../db";
const auth = (...roles) => {
    return async (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = jwt.verify(token, process.env.JWT_SECRET);
        const userData = await db.query(`
            SELECT * FROM users WHERE id = $1
        `, [user.id]);
        if (userData.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        if (roles.length > 0 && !roles.includes(user?.role)) {
            return res.status(403).json({ message: "Forbidden" });
        }
        req.user = userData.rows[0];
        next();
    };
};
export default auth;
