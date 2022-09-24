import { Request, Response } from 'express';
import userService from '../services/userService';
import generateToken from '../middlewares/auth';

const userController = {
  async create(req: Request, res: Response) {
    const user = req.body;
    const { username } = user.username;
    const { id } = await userService.create(user);

    const token = generateToken({ id, username });
    res.status(201).json({ token });
  },
};

export default userController;
