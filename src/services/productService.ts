import productModel from '../models/productModel';
import ICreateProduct from '../Interfaces/ICreateProduct';
import IProduct from '../Interfaces/IProduct';

const productService = {
  async create(product: ICreateProduct): Promise<ICreateProduct> {
    const newProduct = await productModel.create(product);
    return newProduct;
  },

  async getAll(): Promise<IProduct[]> {
    const products = await productModel.getAll();
    return products;
  },
};

export default productService;