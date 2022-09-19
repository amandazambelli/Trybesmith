import express from 'express';
import productRoute from './routes/productRoute.routes';
import userRoute from './routes/userRouter.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
