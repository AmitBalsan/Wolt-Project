import express from "express";
import { getOrder, orderCreate } from "./orderControls";
const router = express.Router();

router.get("/create-order", orderCreate).get("/get-order-lists", getOrder);

export default router;
