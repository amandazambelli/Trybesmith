import jwt, { SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const JWT_CONFIG:SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

type UserToken = {
  username: string;
};

const generateToken = (payload: UserToken):string => {
  const token = jwt.sign({ data: { user: payload.username } }, JWT_SECRET, JWT_CONFIG);

  return token;
};

export default generateToken;
