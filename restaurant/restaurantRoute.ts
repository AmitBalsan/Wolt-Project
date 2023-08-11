import express from "express";
import {
  createRestaurant,
  getRestaurant,
  getRestaurantAllList,
  handleDelete,
  restaurant,
} from "./restaurantControls";

const router = express.Router();

router
  .post("/create-restaurant", createRestaurant)
  .get("/get-restaurant", getRestaurant)
  .delete("/delete-restaurant", handleDelete)
  .patch("/get-res", restaurant)
  .get("/get-restaurants", getRestaurantAllList);

export default router;
