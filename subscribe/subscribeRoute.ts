import express from "express";
import { subscribeEmail } from "./subscribeControls";
const router = express.Router();

router.post("/user-email", subscribeEmail).post("/signup-user");

export default router;
