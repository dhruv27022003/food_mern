import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/constants/http_status.js';
import OrderStatus  from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/constants/order_status.js';
import OrderModel  from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/models/user.model.js';
import auth from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/middlewares/auth.mid.js';

const router = Router();
router.use(auth);

router.post('/create',
asyncHandler(async (req, res) => {
    const requestOrder = req.body;

    if (requestOrder.items.length <= 0) {
        res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }

    await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEW
    });

    const newOrder = new OrderModel({ ...requestOrder, user: req.user.id });
    await newOrder.save();
    res.send(newOrder);
})
)


router.get('/newOrderForCurrentUser', asyncHandler(async (req, res) => {
    const order= await getNewOrderForCurrentUser(req);
    if(order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
}))

router.post('/pay', asyncHandler(async (req, res) => {
    const {paymentId} = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if(!order){
        res.status(HTTP_BAD_REQUEST).send('Order Not Found!');
        return;
    }

    order.paymentId = paymentId;
    order.status = OrderStatus.PAYED;
    await order.save();

    res.send(order._id);
}))

router.get('/track/:id', asyncHandler( async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    res.send(order);
}))

export default router;

async function getNewOrderForCurrentUser(req) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}
