import { Request, Response } from 'express';
import productService from '../services/productService';

const productController = {
  async create(req: Request, res: Response) {
    const product = req.body;
    const newproduct = await productService.create(product);
    res.status(201).json(newproduct);
  },

  async getAll(_req: Request, res: Response) {
    const products = await productService.getAll();
    res.status(200).json(products);
  },
};

export default productController;