"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userControls_1 = require("./userControls");
var router = express_1["default"].Router();
router
    .post("/signup-user", userControls_1.createUser)
    .patch("/user-login", userControls_1.loginUser)
    .get("/login", userControls_1.login);
exports["default"] = router;
