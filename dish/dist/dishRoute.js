"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dishControls_1 = require("./dishControls");
var router = express_1["default"].Router();
router.post("/create-dish", dishControls_1.createDish);
exports["default"] = router;
