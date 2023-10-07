import {Router} from 'express';
import { sample_Bikes } from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/data.js';
import asyncHandler from 'express-async-handler';
import  BikeModel from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/models/bike.model.js'
const router = Router();

router.get("/seed", asyncHandler(
 async (req, res) => {

    console.log("calling seed")
    await BikeModel.create(sample_Bikes);
    res.send("Seed Is Done!");
}
))


router.get("/",asyncHandler(
  async (req, res) => {
    const Bikes = await BikeModel.find();
      res.send(Bikes);
  }
))



export default router;