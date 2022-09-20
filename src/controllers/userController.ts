import { Request, Response } from 'express';
import userService from '../services/userService';
import generateToken from '../middlewares/auth';

const userController = {
  async create(req: Request, res: Response) {
    const user = req.body;
    await userService.create(user);

    const token = generateToken(user);
    res.status(201).json(token);
  },
};

export default userController;