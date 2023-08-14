"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addressControls_1 = require("./addressControls");
var router = express_1["default"].Router();
router.post("/add-address", addressControls_1.createAddress);
exports["default"] = router;
