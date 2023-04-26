import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import jobRoute from "./routes/job.route.js"
import reviewRoute from "./routes/review.route.js"
import orderRoute from "./routes/order.route.js"
import conversationRoute from "./routes/conversation.route.js"
import messageRoute from "./routes/message.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser"

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cookieParser()); /* cookieparser middleware */

app.use("/api/users" , userRoute)
app.use("/api/auth" , authRoute)
app.use("/api/messages" , messageRoute)
app.use("/api/conversations" , conversationRoute)
app.use("/api/orders" , orderRoute)
app.use("/api/reviews" , reviewRoute)
app.use("/api/jobs" , jobRoute)

app.listen(8800, () => {
    connect()
  console.log("Backend Server is running");
});
