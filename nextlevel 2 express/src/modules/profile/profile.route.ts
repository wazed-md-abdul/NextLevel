import { Router } from "express";
import ProfileController from "./profile.controller";

const ProfileRouter = Router()

ProfileRouter.get("/" , ProfileController.getProfile)
ProfileRouter.get("/:id", ProfileController.getProfile)
ProfileRouter.post("/", ProfileController.createProfile)
ProfileRouter.put("/:id", ProfileController.updateProfile)
ProfileRouter.delete("/:id", ProfileController.deleteProfile)

export default ProfileRouter
