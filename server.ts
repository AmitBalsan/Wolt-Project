import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import subscribeRoute from "./subscribe/subscribeRoute";
import userRoute from "./userDB/userRoute";
import restaurantRoute from "./restaurant/restaurantRoute";
import dishRoute from "./dish/dishRoute";
import cartRoute from "./cart/cartRoute";
import cookieParser from "cookie-parser";
import orderRoute from "./order/orderRoute";
import cityRoute from "./city/cityRoute";

dotenv.config();

const uri: string | undefined = process.env.MONGOOSE_URI + "WoltProject";
const port: string | undefined = process.env.PORT;
if (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((error) => {
      console.log(error);
    });
} else {
  console.log("No URI");
}

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(express.static("./public"));

app.use("/api", subscribeRoute);
app.use("/api", userRoute);
app.use("/api", restaurantRoute);
app.use("/api", dishRoute);
app.use("/api", cartRoute);
app.use("/api", orderRoute);
app.use("/api", cityRoute);

app.listen(port, () => {
  console.log("server listen on port ", port);
});
