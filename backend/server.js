import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import BikeRouter from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/routers/bike.router.js';
import userRouter from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/routers/user.router.js';
import orderRouter from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/routers/order.router.js';
import  { dbConnect } from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/configs/database.config.js';
dbConnect();
// const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json()); 
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/Bikes", BikeRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use(express.static('public'));  
  
app.post("/api/order/create", (req, res) => {
    console.log("Received POST request to /api/order/create");
    // Your order creation logic here
  });
  

app.get('*', (req, res) => {
    console.log("received")
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})





