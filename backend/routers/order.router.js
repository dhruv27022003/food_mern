import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/constants/http_status.js';
import OrderStatus  from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/constants/order_status.js';
import  OrderModel  from '../models/orders.model.js';
const router = Router();


router.post('/create',
asyncHandler(async (req, res) => {
    const requestOrder = req.body;
    // console.log("order received...",requestOrder)
    if (requestOrder.items.length <= 0) {
        res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }

    await OrderModel.create(requestOrder);
    console.log("order received and created",requestOrder)
    }));

export default router;

async function getNewOrderForCurrentUser(req) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}
