import express from "express";
import { createDish } from "./dishControls";
const router = express.Router();

router.post("/create-dish", createDish);

export default router;
