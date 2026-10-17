import { Router } from "express"

const userRouter = Router()

userRouter.post("/")
userRouter.get("/");
userRouter.get("/:id");
userRouter.put("/:id" );
userRouter.delete("/:id");

export default userRouter
