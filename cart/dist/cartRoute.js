"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cartControls_1 = require("./cartControls");
var router = express_1["default"].Router();
router
    .post("/add-to-cart", cartControls_1.addToCart)
    .get("/get-user-cart", cartControls_1.getAllDish)
    .patch("/remove-item-cart", cartControls_1.removeItem);
exports["default"] = router;
