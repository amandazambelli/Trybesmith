import userModel from '../models/userModel';
import ILogin from '../Interfaces/ILogin';

const loginService = {
  async login(user: ILogin) {
    const findUser = await userModel.findByUsername(user);

    if (!findUser || findUser.password !== user.password) {
      return undefined;
    }

    return findUser;
  },
};

export default loginService;