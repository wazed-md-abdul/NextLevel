import { Router } from "express"
import userController from "./user.controller";

const userRouter = Router()

userRouter.post("/" , userController.createUser)
userRouter.get("/" , userController.getUsers);
userRouter.get("/:id" , userController.getUser);
userRouter.put("/:id" , userController.putUser);
userRouter.delete("/:id" , userController.deleteUser);

export default userRouter
