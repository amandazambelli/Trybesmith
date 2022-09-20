import orderModel from '../models/orderModel';
import IOrder from '../Interfaces/IOrder';

const orderService = {
  async getAll(): Promise<IOrder[]> {
    const orders = await orderModel.getAll();
    return orders;
  },
};

export default orderService;