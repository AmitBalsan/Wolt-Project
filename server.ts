import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const uri: string | undefined = process.env.MONGOOSE_URI;
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

app.listen(port, () => {
  console.log("server listen on port ", port);
});
