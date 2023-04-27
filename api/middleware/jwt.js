import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next() /* this next is important because if we dont say that here the route wont go through the line in userroute.js line 7 fist ai request then verifytoken (jwt) then by this next() it continues to the next function for example deleteUser*/
  });
};
