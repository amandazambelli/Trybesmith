import { Request, Response } from 'express';
import orderService from '../services/orderService';

const orderController = {
  async getAll(_req: Request, res: Response) {
    const orders = await orderService.getAll();
    res.status(200).json(orders);
  },

  async create(req: Request, res: Response) {
    const id = req.user;
    const newOrder = await orderService.create(id, req.body);
    res.status(200).json({ userId: id, productsIds: newOrder });
  },
};

export default orderController;