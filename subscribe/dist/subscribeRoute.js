"use strict";
exports.__esModule = true;
var express_1 = require("express");
var subscribeControls_1 = require("./subscribeControls");
var router = express_1["default"].Router();
router.post("/user-email", subscribeControls_1.subscribeEmail);
exports["default"] = router;
