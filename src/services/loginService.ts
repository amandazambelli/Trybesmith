import userModel from '../models/userModel';
import ILogin from '../Interfaces/ILogin';

const loginService = {
  async login(user: ILogin) {
    const findUser = await userModel.findByUsername(user);

    return findUser;
  },
};

export default loginService;