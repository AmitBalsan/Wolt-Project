"use strict";
exports.__esModule = true;
var express_1 = require("express");
var CityControls_1 = require("./CityControls");
var router = express_1["default"].Router();
router.get("/get-city", CityControls_1.getCity);
exports["default"] = router;
