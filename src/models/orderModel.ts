import { ResultSetHeader } from 'mysql2';
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

  async create(id: number, productsIds: number[]) {
    productsIds.forEach(async (product) => {
      const [newOrder] = await connection.execute<ResultSetHeader>(
        'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
        [id],
      );

      const { insertId } = newOrder;

      await connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
        [insertId, product],
      );
    });
    return { id, productsIds };
  },
};

export default orderModel;
