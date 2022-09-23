import { Request, Response } from 'express';
import loginService from '../services/loginService';
import generateToken from '../middlewares/auth';

const loginController = {
  async login(req: Request, res: Response) {
    const { username } = req.body;
    const findUser = await loginService.login(req.body);

    if (!findUser) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const token = generateToken(username);
    res.status(201).json(token);
  },
};

export default loginController;