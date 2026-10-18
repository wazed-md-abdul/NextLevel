import type { Request, Response } from "express";
import ProfileService from "./profile.service";

class ProfileController {
  static async getProfile(req: Request, res: Response) {
    try {
        const profile = await ProfileService.getProfile();
        res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async getProfileById(req: Request, res: Response) {
    try {
        const profile = await ProfileService.getProfileById(Number(req.params.id));
        if (!profile) return res.status(404).json({ error: "Profile not found" });
        res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async getProfileByUserId(req: Request, res: Response) {
    try {
        const profile = await ProfileService.getProfileByUserId(Number(req.params.userId));
        if (!profile) return res.status(404).json({ error: "Profile not found" });
        res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async createProfile(req: Request, res: Response) {
    try {
        const profile = await ProfileService.createProfile(req.body);
        res.status(201).json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async updateProfile(req: Request, res: Response) {
    try {
        const profile = await ProfileService.updateProfile(Number(req.params.id), req.body);
        if (!profile) return res.status(404).json({ error: "Profile not found" });
        res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async deleteProfile(req: Request, res: Response) {
    try {
        const profile = await ProfileService.deleteProfile(Number(req.params.id));
        if (!profile) return res.status(404).json({ error: "Profile not found" });
        res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
export default ProfileController
