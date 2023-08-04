import express from "express";
import { subscribeEmail } from "./subscribeControls";
const router = express.Router();

router.post("/user-email", subscribeEmail);

export default router;
