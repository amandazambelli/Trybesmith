import jwt from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';
import * as http from 'http';

declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingMessage, Express.Request {
    user: number;
  }
}

const SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

type JwtPayload = {
  id: number,
  username: string,
};

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || '';

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { id } = jwt.verify(token, SECRET) as JwtPayload;
    req.user = id;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default verifyToken;