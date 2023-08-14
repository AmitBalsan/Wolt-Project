import express from "express";
import { createAddress } from "./addressControls";
const router = express.Router();

router.post("/add-address", createAddress);

export default router;
