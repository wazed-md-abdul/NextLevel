import express from "express"
import type { Request, Response } from "express"


const app = express()
app.use(express.json())
const port = 3000
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World!" })
})
app.post("/", (req: Request, res: Response) => {
    console.log(req.body)
    res.status(200).send("Hello World! from post")
})
app.listen(port, () => {
    console.log("Server is running on port 3000")
})

export default app