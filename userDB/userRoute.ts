import express from "express";
import { createUser, loginUser, login, logout } from "./userControls";
const router = express.Router();

router
  .post("/signup-user", createUser)
  .patch("/user-login", loginUser)
  .get("/login", login)
  .get("/logout", logout);

export default router;
