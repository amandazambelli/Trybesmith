import { ResultSetHeader } from 'mysql2/promise';
import ICreateProduct from '../Interfaces/ICreateProduct';
import IProduct from '../Interfaces/IProduct';
import connection from './connection';

const productModel = {
  async create(product: ICreateProduct): Promise<ICreateProduct> {
    const { name, amount } = product;
    const [newProduct] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = newProduct;
  
    return { id: insertId, ...product };
  },

  async getAll(): Promise<IProduct[]> {
    const [productsData] = await connection.execute('SELECT * FROM Trybesmith.Products');

    return productsData as IProduct[];
  },
};

export default productModel;