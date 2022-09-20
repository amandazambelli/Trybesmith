import IOrder from '../Interfaces/IOrder';
import connection from './connection';

const orderModel = {
  async getAll(): Promise<IOrder[]> {
    const [ordersData] = await connection.execute('SELECT * FROM Trybesmith.Orders');

    return ordersData as IOrder[];
  },
};

export default orderModel;
