import IOrder from '../Interfaces/IOrder';
import connection from './connection';

const orderModel = {
  async getAll(): Promise<IOrder[]> {
    const [ordersData] = await connection.execute(
      `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
      FROM Trybesmith.Orders AS ord
      JOIN Trybesmith.Products AS prod
      ON prod.orderId = ord.id
      GROUP BY ord.id
      ORDER BY ord.userId`,
    );

    return ordersData as IOrder[];
  },
};

export default orderModel;
