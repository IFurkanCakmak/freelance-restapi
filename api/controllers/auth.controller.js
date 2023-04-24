import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(
      req.body.password,
      7
    ); /* password hashed in db  */
    const newUser = new User({
      ...req.body /* spread object , that says take everything inside body objject outside */,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("user created");
  } catch (err) {
    res.status(500).send("spomwhng went wrong");
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
