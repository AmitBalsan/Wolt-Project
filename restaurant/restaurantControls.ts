import jwt from "jwt-simple";
import SubscribeModal from "./restaurantModel";

const secret: string | undefined = process.env.JWT_SECRET;
