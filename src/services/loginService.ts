import userModel from '../models/userModel';
import ILogin from '../Interfaces/ILogin';

const loginService = {
  async login(user: ILogin) {
    const { username } = user;
    await userModel.findByUsername(username);
  },
};

export default loginService;