"use strict";
exports.__esModule = true;
var express_1 = require("express");
var orderControls_1 = require("./orderControls");
var router = express_1["default"].Router();
router.get("/create-order", orderControls_1.orderCreate).get("/get-order-lists", orderControls_1.getOrder);
exports["default"] = router;
