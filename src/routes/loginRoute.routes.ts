import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginValidation from '../middlewares/loginValidation';

const router = Router();

router.post(
  '/',
  loginValidation.verifyUsername,
  loginValidation.verifyPassword,
  loginController.login,
);

export default router;
