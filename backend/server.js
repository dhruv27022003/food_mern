import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import BikeRouter from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/routers/bike.router.js';
import userRouter from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/routers/user.router.js';
import orderRouter from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/routers/order.router.js';
import  { dbConnect } from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/configs/database.config.js';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/Bikes", BikeRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})






// const express = require('express');
// const app = express();
// const BikeRouter = require('/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/routers/Bike.router.ts'); // Import the Bike router

// // Middleware to parse JSON
// app.use(express.json());

// // Mount the BikeRouter at the '/api/Bikes' path
// app.use('/api/Bikes', BikeRouter);

// // Other middleware and setup code...

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




