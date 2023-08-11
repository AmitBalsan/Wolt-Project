import express from "express";
import { createDish, deleteDish, getDish } from "./dishControls";
const router = express.Router();

router
  .post("/create-dish", createDish)
  .patch("/get-dish", getDish)
  .delete("/delete-dish", deleteDish);

export default router;
