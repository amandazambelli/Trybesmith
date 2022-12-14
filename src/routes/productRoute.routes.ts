import { Router } from 'express';
import productController from '../controllers/productController';
import productValidation from '../middlewares/productValidation';

const router = Router();

router.post(
  '/',
  productValidation.verifyName,
  productValidation.verifyAmount,
  productController.create,
);
router.get('/', productController.getAll);

export default router;
