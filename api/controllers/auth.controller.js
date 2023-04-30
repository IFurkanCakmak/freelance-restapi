import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(
      req.body
        .password ,7 /* body after req means send data by user input to body in mongo db */
    ); /* password hashed in db  */
    const newUser = new User({
      ...req.body /* spread object , that says take everything inside body objject outside */,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("user created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username
    }); /* find user by find function in mongo */

    if (!user) return next(createError(404, "User not found"));

    const isCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    ); /* compare password that user trying to login */
    if (!isCorrect) return next(createError(400, "WRONG PASSWORD OR USERNAME"));

    const token = jwt.sign(
      {
        id: user._id /* send user ID */,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } =
      user._doc; /* this is to prevent send password again to db, send other information */
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User logged out");
};
