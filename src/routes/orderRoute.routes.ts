import { Router } from 'express';
import orderController from '../controllers/orderController';
import verifyToken from '../middlewares/tokenValidation';
import productValidation from '../middlewares/productValidation';

const router = Router();

router.get('/', orderController.getAll);
router.post('/', verifyToken, productValidation.verifyProductsIds, orderController.create);

export default router;
