import express from "express";
import { orderCreate } from "./orderControls";
const router = express.Router();

router.get("/create-order", orderCreate);

export default router;
