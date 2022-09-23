import { NextFunction, Response, Request } from 'express';

const loginValidation = {
  
  async verifyUsername(req: Request, res: Response, next: NextFunction) {
    const { username } = req.body;
    
    if (!username) {
      return res.status(400).json({ message: '"username" is required' });
    }
    
    next();
  },

  async verifyPassword(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;
    
    if (!password) {
      return res.status(400).json({ message: '"password" is required' });
    }
  
    if (typeof password !== 'string' || password.length <= 8) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    
    next();
  },
};

export default loginValidation;
