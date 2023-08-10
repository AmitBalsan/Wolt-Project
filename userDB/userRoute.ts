import express from "express";
import { createUser, loginUser, login } from "./userControls";
const router = express.Router();

router
  .post("/signup-user", createUser)
  .patch("/user-login", loginUser)
  .get("/login", login);

export default router;
