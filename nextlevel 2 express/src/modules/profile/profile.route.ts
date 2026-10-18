import { Router } from "express";
import ProfileController from "./profile.controller";

const ProfileRouter = Router()

ProfileRouter.get("/" , ProfileController.getProfile)
ProfileRouter.get("/user/:userId", ProfileController.getProfileByUserId)
ProfileRouter.get("/:id", ProfileController.getProfileById)
ProfileRouter.post("/", ProfileController.createProfile)
ProfileRouter.put("/:id", ProfileController.updateProfile)
ProfileRouter.delete("/:id", ProfileController.deleteProfile)

export default ProfileRouter
