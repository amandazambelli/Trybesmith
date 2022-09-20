import { ResultSetHeader } from 'mysql2/promise';
import IUser from '../Interfaces/IUser';
import connection from './connection';

const userModel = {
  async create(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [newUser] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    const { insertId } = newUser;
  
    return { id: insertId, ...user };
  },

  async findByUsername(username: string) {
    const [user] = await connection.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.Users WHERE username=?',
      [username],
    );
  
    return user;
  },
};

export default userModel;