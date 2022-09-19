import userModel from '../models/userModel';
import IUser from '../Interfaces/IUser';

const userService = {
  async create(user: IUser): Promise<IUser> {
    const newUser = await userModel.create(user);
    return newUser;
  },
};

export default userService;