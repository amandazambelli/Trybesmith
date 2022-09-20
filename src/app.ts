import express from 'express';
import productRoute from './routes/productRoute.routes';
import userRoute from './routes/userRoute.routes';
import orderRoute from './routes/orderRoute.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
