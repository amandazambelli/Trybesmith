import Jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

type UserToken = {
  id: number;
};

const generateToken = (payload: UserToken) => {
  const token = Jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });

  return token;
};

export default generateToken;
