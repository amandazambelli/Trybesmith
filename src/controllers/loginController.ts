import { Request, Response } from 'express';
import loginService from '../services/loginService';
import generateToken from '../middlewares/auth';

const loginController = {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = { username, password };
    await loginService.login(user);

    const token = generateToken(username);
    res.status(201).json(token);
  },
};

export default loginController;