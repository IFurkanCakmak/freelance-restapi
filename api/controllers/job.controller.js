import Job from "../models/job.model.js";
import createError from "../utils/createError.js";

export const createJob = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers make a job insert"));

  const newJob = new Job({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    next(err);
  }
};
export const deleteJob = async (req, res, next) => {
  try {
    /* first find the job and check if the userid equals owner that job can be deleted*/
    const job = await Job.findById(req.params.id);
    if (job.userId !== req.userId)
      return next(createError(403, "You can delete only our job"));

    await Job.findByIdAndDelete(req.params.id);
    res.status(200).send("Job has been deleted!");
  } catch (err) {
    next(err);
  }
};
export const getJob = async (req, res, next) => {
  try {
    const Job = await Job.findById(req.params.id);
    if (!job) next(createError(404, "Job not found!"));
    res.status(200).send(job);
  } catch (err) {
    next(err);
  }
};

export const getJobs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    const jobs = await Job.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(jobs);
  } catch (err) {
    next(err);
  }
};
