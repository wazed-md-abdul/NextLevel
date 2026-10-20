import { Router } from "express"
import userController from "./user.controller";
import auth from "../../middleware/auth";
import { USER_ROLES } from "../../types";

const userRouter = Router()

userRouter.post("/", userController.createUser)
userRouter.get("/", auth(USER_ROLES.ADMIN, USER_ROLES.AGENT), userController.getUsers);
userRouter.get("/:id", auth(USER_ROLES.ADMIN, USER_ROLES.AGENT), userController.getUser);
userRouter.put("/:id", auth(USER_ROLES.ADMIN, USER_ROLES.AGENT), userController.putUser);
userRouter.delete("/:id", auth(USER_ROLES.ADMIN), userController.deleteUser);

export default userRouter
