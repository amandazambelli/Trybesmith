import { Router } from 'express';
import userController from '../controllers/userController';
import userValidation from '../middlewares/userValidation';

const router = Router();

router.post(
  '/',
  userValidation.verifyUsername,
  userValidation.verifyClasse,
  userValidation.verifyLevel,
  userValidation.verifyPassword,
  userController.create,
);

export default router;
