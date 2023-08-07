import express from "express";
import { createUser, loginUser } from "./userControls";
const router = express.Router();

router.post("/signup-user", createUser).patch("/user-login", loginUser);

export default router;
