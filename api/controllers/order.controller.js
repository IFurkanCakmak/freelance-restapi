import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Job from "../models/job.model.js";

export const createOrder = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.jobId);
    const newOrder = new Order({

        jobId:job._id,
        img: job.cover,
        title: job.title,
        buyerId:req.userId,
        sellerId: job.userId,
        price:job.price,
        payment_intent:"temporary",
    });

    await newOrder.save();
    res.status(200).send("successfull")
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
    try {

        const orders = await Order.find({
            ...(req.isSeller ? {sellerId:req.userId}: {buyerId: req.userId}), /* if its seller the sellerId will be id if its not the id will buyerId */
            isCompleted:true,
        });

        res.status(200).send(orders);
    } catch (err) {
      next(err);
    }
  };
