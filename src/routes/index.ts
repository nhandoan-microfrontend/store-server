import { Router } from 'express';
import productsRoute from './productsRoute';
import categoriesRoute from './categoriesRoute'
import userRoute from './userRoute'

const router = Router();

router.use('/products', productsRoute);
router.use('/categories', categoriesRoute)
router.use('/users', userRoute)

export default router;
