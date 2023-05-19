import Review from "../models/review.model.js";
import Job from "../models/job.model.js";
import createError from "../utils/createError.js ";

export const createReview = async (req, res, next) => {
  if (req.isSeller) return next(createError(403, "Sellers cant review"));

  const newReview = new Review({
    userId: req.userId,
    jobId: req.body.jobId,
    desc: req.body.desc,
    star: req.body.star,
  });
  try {
    const review = await Review.findOne({
      jobId: req.body.jobId,
      userId: req.userId,
    });

    if (review) return next(createError(403, "You have already review"));

    const savedReview = await newReview.save();

    await Job.findByIdAndUpdate(req.body.jobId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });

    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {

    const reviews =await Review.find({jobId: req.params.jobId});
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
