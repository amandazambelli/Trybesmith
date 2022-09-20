import { Router } from 'express';
import productController from '../controllers/productController';
import loginValidation from '../middlewares/loginValidation';

const router = Router();

router.post(
  '/',
  loginValidation.verifyUsername,
  loginValidation.verifyPassword,
  productController.create,
);

export default router;
