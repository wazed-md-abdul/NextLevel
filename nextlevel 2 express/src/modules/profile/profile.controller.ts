import type { Request, Response } from "express";
import ProfileService from "./profile.service";

class ProfileController {
  static async getProfile(req: Request, res: Response) {
    try {
        const profile = await ProfileService.getProfile();
        res.json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async getProfileById(req: Request, res: Response) {
    try {
        const profile = await ProfileService.getProfileById(req.params.id);
        res.json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async createProfile(req: Request, res: Response) {
    try {
        const profile = await ProfileService.createProfile(req.body);
        res.json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async updateProfile(req: Request, res: Response) {
    try {
        const profile = await ProfileService.updateProfile(req.params.id, req.body);
        res.json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async deleteProfile(req: Request, res: Response) {
    try {
        await ProfileService.deleteProfile(req.params.id);
        res.json({ message: "Profile deleted" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
export default ProfileController
