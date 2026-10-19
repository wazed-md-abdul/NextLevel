import { Router } from "express"
import userController from "./user.controller";
import auth from "../../middleware/auth";

const userRouter = Router()

userRouter.post("/", userController.createUser)
userRouter.get("/", auth(), userController.getUsers);
userRouter.get("/:id", auth(), userController.getUser);
userRouter.put("/:id", auth(), userController.putUser);
userRouter.delete("/:id", auth(), userController.deleteUser);

export default userRouter
