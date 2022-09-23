import { Request, Response } from 'express';
import orderService from '../services/orderService';

const orderController = {
  async getAll(_req: Request, res: Response) {
    const orders = await orderService.getAll();
    res.status(200).json(orders);
  },

  async create(_req: Request, res: Response) {
    const orders = await orderService.create(req.body);
    res.status(200).json(orders);
  },
};

export default orderController;