import orderModel from '../models/orderModel';
import IOrder from '../Interfaces/IOrder';

const orderService = {
  async getAll(): Promise<IOrder[]> {
    const orders = await orderModel.getAll();
    return orders;
  },

  async create(id: number, productsIds: number[]) {
    const newOrder = await orderModel.create(id, productsIds);
    return newOrder;
  },
};

export default orderService;