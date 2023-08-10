import express from "express";
import { getCity } from "./CityControls";
const router = express.Router();

router.get("/get-city", getCity);

export default router;
