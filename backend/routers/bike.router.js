import {Router} from 'express';
import { sample_Bikes, sample_tags } from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/data.js';
import asyncHandler from 'express-async-handler';
import  BikeModel from '/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/models/bike.model.js'
const router = Router();

router.get("/seed", asyncHandler(
 async (req, res) => {
    const BikesCount = await BikeModel.countDocuments();
    // if(BikesCount> 0){
    //   res.send("Seed is already done!");
    //   return;
    // }
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

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const Bikes = await BikeModel.find({name: {$regex:searchRegex}})
    res.send(Bikes);
  }
))

router.get("/tags", asyncHandler(
  async (req, res) => {
    const tags = await BikeModel.aggregate([
      {
        $unwind:'$tags'
      },
      {
        $group:{
          _id: '$tags',
          count: {$sum: 1}
        }
      },
      {
        $project:{
          _id: 0,
          name:'$_id',
          count: '$count'
        }
      }
    ]).sort({count: -1});

    const all = {
      name : 'All',
      count: await BikeModel.countDocuments()
    }

    tags.unshift(all);
    res.send(tags);
  }
))

router.get("/tag/:tagName",asyncHandler(
  async (req, res) => {
    const Bikes = await BikeModel.find({tags: req.params.tagName})
    res.send(Bikes);
  }
))

router.get("/:BikeId", asyncHandler(
  async (req, res) => {
    const Bike = await BikeModel.findById(req.params.BikeId);
    res.send(Bike);
  }
))


export default router;