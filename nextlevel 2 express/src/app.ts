import express from "express"
import type { Request, Response } from "express"
import userRouter from "./modules/user/user.route"
import ProfileRouter from "./modules/profile/profile.route"
import authRouter from "./modules/auth/auth.route"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get("/", (req: Request , res: Response, ) => {
  res.status(200).json({
    message: "Express Server",
    author: "Next Level",
  });
});
app.use("/api/user", userRouter)
app.use("/api/profile", ProfileRouter)
app.use("/api/auth", authRouter)
export default app
