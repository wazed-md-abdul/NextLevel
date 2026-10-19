import type { Request, Response } from "express";
import { db } from "../../db/index";
import UserService from "./user.service";

class userController {
 static createUser = async (req: Request, res: Response) => {
    try {
      const result = await UserService.createUser(req.body)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static putUser = async (req: Request, res: Response) => {
    try {

      const result = await UserService.updateUser(Number(req.params.id), req.body)
      if(result === null) return res.status(404).json({ error: "User not found" })
      res.status(200).json(result.rows[0])
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static deleteUser = async (req: Request, res: Response) => {
    try {
      const result = await UserService.deleteUser(Number(req.params.id))
      if(result === null) return res.status(404).json({ error: "User not found" })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static getUsers = async (req: Request, res: Response) => {
    try {
      const user = req.user
      console.log(user)
      const result = await UserService.getAllUsers()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static getUser = async (req: Request, res: Response) => {
    try {

      const result = await UserService.getUserById(Number(req.params.id))
      if(result === null) return res.status(404).json({ error: "User not found" })
      res.status(200).json(result.rows[0])

    }
    catch (error) {
      res.status(500).json({ error: error })
    }
  }

}

export default userController
