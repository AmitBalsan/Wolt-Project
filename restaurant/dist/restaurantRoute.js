"use strict";
exports.__esModule = true;
var express_1 = require("express");
var restaurantControls_1 = require("./restaurantControls");
var router = express_1["default"].Router();
router
    .post("/create-restaurant", restaurantControls_1.createRestaurant)
    .get("/get-restaurant", restaurantControls_1.getRestaurant)["delete"]("/delete-restaurant", restaurantControls_1.handleDelete)
    .patch("/get-res", restaurantControls_1.restaurant);
exports["default"] = router;
