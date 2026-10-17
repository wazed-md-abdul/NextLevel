import express from "express"
import type { Request, Response } from "express"
import { db } from "./db/index"
import userRouter from "./modules/user/user.route"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 3000
app.get("/", (res: Response) => {
  res.status(200).json({
    message: "Express Server",
    author: "Next Level",
  });
});
app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log("Server is running on port 3000")
})

export default app
